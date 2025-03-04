import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import SessionProviderWrapper from "./SessionProviderWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio Ai",
  description: "Portfolio Ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Providers> */}
        <main>
          {/* <SessionProviderWrapper> */}
            {/* <SocketProvider> */}
            {children}
            {/* </SocketProvider> */}
          {/* </SessionProviderWrapper> */}
        </main>
        {/* </Providers> */}
        {/* <Toaster /> Make sure this is properly configured */}
      </body>
    </html>
  );
}
