// app/layout.
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { SiteConfig } from "@/src/lib/site-config";
import { cn } from "@/src/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Providers } from "./Providers";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "h-full bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="flex min-h-screen flex-col p-4">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  );
}
