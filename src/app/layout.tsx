import type { Metadata, Viewport } from "next";
import {
  Unbounded,
  Hanken_Grotesk,
  IBM_Plex_Mono,
  Noto_Kufi_Arabic,
  Noto_Sans_Arabic,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/motion/Preloader";
import { RouteCurtain } from "@/components/motion/RouteCurtain";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const kufi = Noto_Kufi_Arabic({
  variable: "--font-kufi",
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-ar",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  // Update when the production domain is final
  metadataBase: new URL("https://black-automation.vercel.app"),
  title: {
    default: "Black Automation | AI Automation Systems",
    template: "%s | Black Automation",
  },
  description:
    "Black Automation builds AI agents, workflow automation, integrations, dashboards, CRM automation, and process systems.",
  icons: { icon: "/imgs/logo/white.png" },
  openGraph: {
    title: "Black Automation",
    description:
      "AI automation systems, integrations, dashboards, and process foundations.",
    type: "website",
    images: ["/imgs/logo/main.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

/* Applies the stored language direction before first paint to avoid an RTL flash. */
const prePaintLang = `
(function () {
  try {
    var lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("ba-lang");
    if (lang === "ar" || lang === "ckb") {
      document.documentElement.lang = lang;
      document.documentElement.dir = "rtl";
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${unbounded.variable} ${hanken.variable} ${plexMono.variable} ${kufi.variable} ${notoArabic.variable} ${greatVibes.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaintLang }} />
      </head>
      <body className="min-h-dvh flex flex-col bg-ink text-cream">
        <LanguageProvider>
          <Preloader />
          <RouteCurtain />
          <div className="grain" aria-hidden="true" />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
