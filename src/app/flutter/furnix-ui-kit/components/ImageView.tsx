"use client";

import { Box, GridCol, Image } from "@mantine/core";

export default function ImageView() {
  let deviceWidth = 1024;

  if (typeof document !== "undefined") {
    deviceWidth = document.documentElement.clientWidth;
  }

  return (
    <GridCol
      span={{ lg: 8 }}
      pos="relative"
      h={700}
      style={{ overflow: "hidden" }}
    >
      {deviceWidth > 768 && (
        <Box
          w={350}
          h={350}
          style={{
            right: 300,
            top: 200,
            position: "absolute",
            background:
              "linear-gradient(45deg, rgba(8, 74, 32, 0.66),rgba(0, 219, 239, 0.43))",
            filter: "blur(100px)",
          }}
        ></Box>
      )}
      {deviceWidth > 768 ? (
        <Image
          src="/images/furnix-vertical.png"
          alt="Furnix Flutter Application UI Kit"
          style={{
            position: "relative",
            width: "100%",
            left: 120,
            top: -220,
            transform: "rotate(-10deg)",
          }}
        />
      ) : (
        <Image
          src="/images/furnix-vertical.png"
          alt="Furnix Flutter Application UI Kit"
          style={{
            position: "relative",
            width: "100%",
          }}
        />
      )}
    </GridCol>
  );
}
