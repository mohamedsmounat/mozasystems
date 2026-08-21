import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Moza Systems — Creator marketing, websites & AI systems";

export default async function OpengraphImage() {
  const wordmarkPath = join(process.cwd(), "public", "logo", "moza-wordmark-white.png");
  const wordmarkBase64 = readFileSync(wordmarkPath).toString("base64");
  const wordmarkSrc = `data:image/png;base64,${wordmarkBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#101c2c",
          padding: "90px",
        }}
      >
        <img src={wordmarkSrc} width={520} height={173} alt="" />
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            letterSpacing: 2,
            color: "#c8d0d8",
            display: "flex",
          }}
        >
          Creator marketing · Websites · AI systems
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 90,
            left: 90,
            right: 90,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.16)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 90,
            fontSize: 20,
            color: "#7c8996",
            display: "flex",
          }}
        >
          mozasystems.com
        </div>
      </div>
    ),
    { ...size },
  );
}
