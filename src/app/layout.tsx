import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing page base",
  description: "This is a landing page base",
  openGraph: {
    title: "Landing page base",
    description: "This is the description of a landing page base",
    images: [
      {
        url: "https://i.imghippo.com/files/Ej8Ot1723754871.png",
        width: 1200,
        height: 630,
        alt: "Landing page base",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}