import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import AuthCheck from "@/components/AuthCheck";
import { Toaster } from "@/components/ui/toaster";
import I18nProvider from "@/components/I18nProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OpenWebUI Monitor",
  description: "Monitor and analyze your OpenWebUI usage data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <I18nProvider>
          <AuthCheck>
            <Header />
            {children}
          </AuthCheck>
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}
