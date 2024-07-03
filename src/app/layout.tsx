import "@mantine/core/styles.css";
import { Inter } from "next/font/google";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afgprogrammer",
  description: "I have followed setup instructions carefully",
};

// const themeObject = createTheme({
// })

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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
