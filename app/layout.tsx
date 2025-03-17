import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaming Website",
  description: "Gaming Website",
  generator: "Gaming Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
