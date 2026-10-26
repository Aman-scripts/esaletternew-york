/**
 * Receives #appForm submissions (POST only; never GET, so nothing lands in URLs or logs as query strings).
 * TODO: forward to the HIPAA-compliant intake/EHR system. Do not log request bodies.
 */

const REQUIRED = ["firstName", "lastName", "email", "housing", "animal", "consent"] as const;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readBody(request: Request): Promise<Record<string, string>> {
  const type = request.headers.get("content-type") ?? "";
  if (type.includes("application/json")) {
    return (await request.json()) as Record<string, string>;
  }
  const form = await request.formData();
  return Object.fromEntries([...form.entries()].map(([k, v]) => [k, String(v)]));
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await readBody(request);
  } catch {
    return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const missing = REQUIRED.filter((key) => !body[key]?.toString().trim());
  if (missing.length || !EMAIL.test(body.email)) {
    return Response.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  // Integration point: send `body` to the secure intake provider here.

  const isJson = (request.headers.get("content-type") ?? "").includes("application/json");
  if (!isJson) {
    // No-JS fallback: return to the form without placing any data in the URL
    return Response.redirect(new URL("/#appForm", request.url), 303);
  }
  return Response.json({ ok: true });
}
