import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read at module scope so the image is generated once at build time.
const logo = await readFile(join(process.cwd(), "public/anchorblock_logo.jpeg"), "base64");

/** Social share card in the hero's palette: brand blue with a soft lavender accent. */
export default async function OpengraphImage() {
  const logoSrc = `data:image/jpeg;base64,${logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(125deg, #1429aa 0%, #1b33d3 55%, #3037a7 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={logoSrc} width={88} height={88} alt="" style={{ borderRadius: 20, background: "#fff" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</span>
            <span style={{ fontSize: 24, color: "rgba(255,255,255,.82)" }}>Information Technology &amp; Services</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 300, lineHeight: 1.02, letterSpacing: -4 }}>
          <span>Engineering tomorrow.</span>
          <span>
            Building what&nbsp;<span style={{ color: "#d9ddff" }}>matters.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,.82)" }}>
          Software &amp; data systems studio · Mirpur DOHS, Dhaka · Est. {site.foundingYear}
        </div>
      </div>
    ),
    size,
  );
}
