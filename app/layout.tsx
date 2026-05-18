import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Northstar Coffee — Onboarding Assistant",
  description:
    "Your AI-powered onboarding guide for Northstar Coffee. Get answers about policies, schedules, and culture during your first 30 days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
