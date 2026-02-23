import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/navbar/header/page"
import Footer from "../components/navbar/footer/page"
import Fixedicon from "../components/navbar/fixed_icons/page"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sri Ram Hotel",
  description: "Created By Next Biz India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Fixedicon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
