import { ImageResponse } from "next/og";

export const alt = "TollesDing – praktische Alltagshelfer für Familien";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(180deg, rgba(255,252,247,1) 0%, rgba(247,239,228,1) 100%)",
          color: "#272117"
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            opacity: 0.7
          }}
        >
          TollesDing
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: "82%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              lineHeight: 1.02,
              fontWeight: 700,
              gap: 4
            }}
          >
            <span>Praktische Alltagshelfer</span>
            <span>für Familien</span>
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.4,
              opacity: 0.78
            }}
          >
            Ehrlich kuratiert, persönlich bewährt und direkt verlinkt.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 24,
            opacity: 0.68,
            textTransform: "uppercase",
            letterSpacing: "0.14em"
          }}
        >
          <span>Augsburg</span>
          <span>•</span>
          <span>Drei Kinder</span>
          <span>•</span>
          <span>Persönlich ausgewählt</span>
        </div>
      </div>
    ),
    size
  );
}
