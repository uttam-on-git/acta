import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-providers";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Acta - Turn Bank Statements Into Clear Financial Insights",
  description:
    "Acta is a privacy-first finance tool that transforms your bank statements into beautiful charts and insights. Upload a CSV and explore your finances instantly - all data stays on your device.",
  openGraph: {
    title: "Acta – Privacy-First Finance Visualization",
    description:
      "Upload your bank CSV and instantly see beautiful charts. No signup. No tracking. All data stays on your device.",
    url: "https://acta.app",
    siteName: "Acta",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Acta - Privacy-First Finance Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acta - Privacy-First Finance Visualization",
    description:
      "Transform bank statements into insights instantly. No signup. All data stays local.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
