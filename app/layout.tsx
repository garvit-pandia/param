import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto_Serif } from "next/font/google";
import { photos } from "@/data/images";
import { site, siteName } from "@/data/site";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Vercel sets this to the live domain at build time; locally it falls back to the dev URL.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:5184";

// The picture shown when the link is shared on WhatsApp, X, LinkedIn and so on.
const shareImage = {
  url: photos.laptopCode.src,
  width: photos.laptopCode.width,
  height: photos.laptopCode.height,
  alt: "A laptop showing green code in a dark room",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    siteName,
    title: site.title,
    description: site.description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [shareImage],
  },
};

// Colours the phone browser's address bar to match the page.
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${robotoSerif.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Scroll animations start hidden; without JavaScript, show everything. */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
