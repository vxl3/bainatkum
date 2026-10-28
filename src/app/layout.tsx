import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "بيناتكم | مو كل صديق يعرفك صدگ",
  description: "سوّي تحدّيك، دزّه لجماعتك، وشوف منو يعرفك أكثر 😂",
  openGraph: {
    title: "بيناتكم",
    description: "مو كل صديق يعرفك صدگ 👀",
    locale: "ar_IQ",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0A14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-tajawal bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
