import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AccountState from "./context/AccountState";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GHOST TEAM",
  description: "Receipt printing app developed by Ghost Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AccountState>{children}</AccountState>
      </body>
    </html>
  );
}
