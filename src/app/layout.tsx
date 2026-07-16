import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Loader from "@/components/ui/Loader";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ChatWidget from "@/components/chat/ChatWidget";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteUrl = "https://saravanansekar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Saravanan Sekar | Software Developer",
  description:
    "Portfolio of Saravanan Sekar — a Software Developer specializing in React.js, Next.js, Node.js, Express, MySQL, and MongoDB. Explore projects, experience, and skills.",
  keywords: [
    "Saravanan Sekar",
    "Software Developer",
    "React Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Saravanan Sekar" }],
  creator: "Saravanan Sekar",
  openGraph: {
    title: "Saravanan Sekar | Software Developer",
    description:
      "Portfolio of Saravanan Sekar — a Software Developer specializing in React.js, Next.js, Node.js, Express, MySQL, and MongoDB.",
    url: siteUrl,
    siteName: "Saravanan Sekar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saravanan Sekar | Software Developer",
    description:
      "Portfolio of Saravanan Sekar — a Software Developer specializing in React.js, Next.js, Node.js, Express, MySQL, and MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Loader />
        <AmbientBackground />
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
