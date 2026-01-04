import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Acta - Turn Bank Statements Into Clear Financial Insights",
  description:
    "Acta is a privacy-first finance tool that transforms your bank statements into beautiful charts and insights. Upload a CSV and explore your finances instantly - all data stays on your device.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
