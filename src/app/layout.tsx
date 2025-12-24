import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/hooks/use-user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vyntra Care | Advanced Medical Supply Chain",
  description: "Premium healthcare logistics and inventory management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
