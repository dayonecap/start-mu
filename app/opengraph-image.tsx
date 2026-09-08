import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "start.mu by Intrasia, Mauritius";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#F5F1EA",
          color: "#1C1C1E",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 56 }}>
            <span>start</span>
            <span style={{ color: "#1F3B2D" }}>.mu</span>
          </div>
          <div style={{ fontSize: 22, color: "#4A4A4D", marginTop: 6, fontFamily: "sans-serif" }}>by Intrasia</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 1000 }}>Residency, establishment, and the quieter work of settling into Mauritius.</div>
          <div style={{ marginTop: 40, height: 6, width: 120, background: "#1F3B2D" }} />
        </div>
      </div>
    ),
    size,
  );
}
