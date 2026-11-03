import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PakScholar | Empowering Talent, Transforming Futures",
  description:
    "PakScholar helps talented and deserving students in Pakistan access educational opportunities through scholarships and merit-focused support.",
  keywords: [
    "Pakistan Scholarships",
    "PakScholar",
    "Educational Foundation",
    "Undergraduate Scholarships Pakistan",
    "Need-Based Scholarships",
    "Merit Scholarship Pakistan",
  ],
  authors: [{ name: "PakScholar Foundation" }],
  openGraph: {
    title: "PakScholar | Empowering Talent, Transforming Futures",
    description:
      "PakScholar helps talented and deserving students in Pakistan access educational opportunities through scholarships and merit-focused support.",
    url: "https://pakscholar.org",
    siteName: "PakScholar",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#1C2B36] selection:bg-[#16865D]/20 selection:text-[#102A43]">
        {children}
      </body>
    </html>
  );
}
