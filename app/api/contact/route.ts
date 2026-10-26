/**
 * Receives contact form messages. TODO: forward to the support inbox / helpdesk.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const isJson = (request.headers.get("content-type") ?? "").includes("application/json");
  let body: Record<string, string>;
  try {
    body = isJson
      ? ((await request.json()) as Record<string, string>)
      : Object.fromEntries([...(await request.formData()).entries()].map(([k, v]) => [k, String(v)]));
  } catch {
    return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.message?.trim() || !EMAIL.test(body.email ?? "")) {
    return Response.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  // Integration point: deliver the message to support.

  if (!isJson) return Response.redirect(new URL("/contact/", request.url), 303);
  return Response.json({ ok: true });
}
