import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
const satoshiLight = localFont({
  src: './fonts/Satoshi-Light.woff',
  variable: '--font-satoshi-light',
  weight: "300"
});
const satoshiRegular = localFont({
  src: './fonts/Satoshi-Regular.woff',
  variable: '--font-satoshi-regular',
  weight: "400"
})

export const metadata: Metadata = {
  title: "CodeAnt AI",
  description: "Created by Amar Prasad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshiLight.variable} ${satoshiRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
