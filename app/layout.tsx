import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter,Rethink_Sans } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ['latin'] })
const rethink_Sans = Rethink_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dolah Tour - Your Ultimate Phuket Travel Experience",
  description: "Explore the beauty of Phuket with Dolah Tour, your trusted local guide for tropical vacations, island tours, and unique experiences. Discover stunning beaches, vibrant markets, and unforgettable adventures in Thailand.",
  keywords: "Phuket tours, Dolah Tour, Thailand travel, island adventures, local guide, tropical vacations, Phuket travel agency"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethink_Sans.className} ${inter.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
