import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./Component/NavMenu";
import "./globals.css";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <NavMenu/>
            {children}
          </AuthProvider>
        </body>
      </html>
  );
}
