import { ImageResponse } from "next/og";

/** Default 1200x630 social image (spec audit: replace the 380x392 logo og:image). Inline styles are required by ImageResponse. */
export const alt = "ESA Letter New York: licensed online ESA evaluations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(120deg, #0a5690 0%, #0f75bc 55%, #429ed7 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, opacity: 0.85 }}>esaletternewyork.com</div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>ESA Letter New York</div>
        <div style={{ fontSize: 38, marginTop: 28, maxWidth: 900, lineHeight: 1.3 }}>
          Online evaluations with New York-licensed mental health professionals
        </div>
      </div>
    ),
    size,
  );
}
