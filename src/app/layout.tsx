import type { Metadata } from "next";
import { Inter, Archivo, Noto_Kufi_Arabic, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SpecsProvider } from "@/components/SpecsProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const arabic = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AntA by MK Technologies | Own Your Code. Own Your Data.",
  description:
    "Hardcore, owner-controlled management systems. Clinic, retail, fleet, rental, HR, home and car — offline-first, online-intelligent.",
  keywords: [
    "clinic management system",
    "offline POS",
    "fleet management",
    "rental management software",
    "HR software Egypt",
    "AntA",
    "MK Technologies",
  ],
  authors: [{ name: "MK Technologies" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "AntA by MK Technologies",
    description: "Own your code. Own your data. Offline-first management systems with online intelligence.",
    siteName: "AntA by MK Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AntA by MK Technologies",
    description: "Own your code. Own your data. Offline-first management systems with online intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${archivo.variable} ${arabic.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <SpecsProvider>{children}</SpecsProvider>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
