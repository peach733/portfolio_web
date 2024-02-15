"use client";

import { Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global.style";
import StyledComponentsRegistry from "@hooks/styled/registry";

const noto = Noto_Sans_KR({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <html lang="ko" className={`${noto.variable}`}>
          <head>
            <meta name="PORTFOLIO.OUR" content="PORTFOLIO.SHARE.WEB" />
            <title> PORTFOLIO.OUR </title>
            <GlobalStyle />
          </head>
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
