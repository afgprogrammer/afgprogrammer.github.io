import "@mantine/core/styles.css";
import { Inter } from "next/font/google";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { HeaderMenu } from "@/_components/header/HeaderMenu";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noor Mohammad Rahmani - Afgprogrammer",
  description:
    "I'm a Full-Stack Software Developer living in Kabul 🇦🇫, and I focus on making digital experiences that are easy to use, enjoyable, and get the job done. I love tackling challenging problems and creating solutions that truly matter to people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark">
          <HeaderMenu />
          {children}
        </MantineProvider>
      </body>
      <GoogleAnalytics gaId="G-FY5MJ6XL2Q" />
    </html>
  );
}
