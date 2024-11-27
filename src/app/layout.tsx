import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "London Gutter Cleaning Service",
  description:
    "Award Winning Service For London Gutter Cleaning, Repairs & Replacement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} antialiased`}
      >
        <NextUiProvider>{children}</NextUiProvider>
      </body>
    </html>
  );
}
