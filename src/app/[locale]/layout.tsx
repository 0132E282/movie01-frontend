import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "../globals.css";
import { AppProvider } from "@/context/AppContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "%s | PhimMoi",
    default: "PhimMoi – Xem Phim Online HD Cập Nhật Mới Nhất",
  },
  description: "Xem phim online chất lượng cao, cập nhật phim mới nhất, phim hành động, phim bộ, phim lẻ, phim hoạt hình tại PhimMoi.",
  keywords: ["xem phim", "phim online", "phim hd", "phimmoi", "phim moi", "xem phim moi", "phim hay", "phim hanh dong", "phim bo", "phim le"],
  authors: [{ name: "PhimMoi Team" }],
  creator: "PhimMoi",
  publisher: "PhimMoi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://phimmoi01-frontend.vercel.app"), // Fallback base URL
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://phimmoi01-frontend.vercel.app",
    siteName: "PhimMoi",
    title: "PhimMoi – Xem Phim Online HD Cập Nhật Mới Nhất",
    description: "Xem phim online chất lượng cao, cập nhật phim mới nhất, phim hành động, phim bộ, phim lẻ, phim hoạt hình tại PhimMoi.",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "PhimMoi - Xem phim online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhimMoi – Xem Phim Online HD Cập Nhật Mới Nhất",
    description: "Xem phim online chất lượng cao, cập nhật phim mới nhất, phim hành động, phim bộ, phim lẻ, phim hoạt hình tại PhimMoi.",
    images: ["/images/og-main.png"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="notranslate" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AppProvider>
            {children}
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
