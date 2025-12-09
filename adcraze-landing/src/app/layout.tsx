import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const heading = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adcraze | Performance-Driven Digital Advertising Agency",
  description:
    "Adcraze builds performance-based ad campaigns that scale revenue, not costs. Get accountable, ROI-driven growth for your business.",
  keywords: [
    "performance marketing agency",
    "paid media management",
    "digital advertising for ecommerce",
    "lead generation agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${heading.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
