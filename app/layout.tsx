import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { photos } from "@/data/images";
import { site, siteName } from "@/data/site";
import "./globals.css";

// Only the weights the stylesheet uses. Fixed weights instead of the variable
// fonts keep the first layout of the page fast on low-end phones.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "500",
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
  alt: "A laptop screen filled with lines of code",
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
  themeColor: "#050914",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
