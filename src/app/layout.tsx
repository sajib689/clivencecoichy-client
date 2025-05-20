import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import Footer from "@/components/shared/Footer/Footer";
import ReduxStoreProvider from "@/redux/ReduxStoreProvider";
import { Toaster } from "sonner";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ARC (Allied Restoration Contractors)",
  description:
    "Award Winning Service Allied Restoration Contractors, Repairs & Replacement",
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
        <NextUiProvider>
          <ReduxStoreProvider>
            <>
              <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
                <Navbar />
                {children}

                <Footer />
              </div>
              <ScrollToTopButton />
              <Toaster />
            </>
          </ReduxStoreProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
