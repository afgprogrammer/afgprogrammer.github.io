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
          w={200}
          h={200}
          style={{
            right: 300,
            top: 300,
            position: "absolute",
            background:
              "linear-gradient(45deg, rgb(239, 100, 0),rgba(239, 100, 0, 0.43))",
            filter: "blur(100px)",
          }}
        ></Box>
      )}
      {deviceWidth > 768 ? (
        <Image
          src="/images/foody-vertical.png"
          alt="Foody UI Kit"
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
          src="/images/foody-vertical.png"
          alt="Foody UI Kit"
          style={{
            position: "relative",
            width: "100%",
          }}
        />
      )}
    </GridCol>
  );
}
