import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEB Election Site",
  description: "IEB Election Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
