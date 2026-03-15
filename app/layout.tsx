import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Long Range Transportation Plan 2045",
  description: "Champaign-Urbana Long Range Transportation Plan (LRTP) 2045",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,400i,700" />
        <link rel="stylesheet" href="/lrtp2045/css/styles.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="/lrtp2045/js/uswds.min.js" strategy="afterInteractive" />
        <Script src="/lrtp2045/js/plandocument.js" strategy="afterInteractive" />
        <Script type="module" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
