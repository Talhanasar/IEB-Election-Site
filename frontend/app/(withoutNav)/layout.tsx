import type { Metadata } from "next";
import "../globals.css";
import { LanguageProvider } from "@/store/LanguageContext";

export const metadata: Metadata = {
  title: "IEB Election Site",
  description: "IEB Election Site",
};

export default function WithoutNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-stone-900 selection:bg-green-100 selection:text-green-900">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

