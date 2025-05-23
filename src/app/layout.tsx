import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/sass/style.scss";
import "./styles/font-awesome.min.css";
import "./styles/animate.css";
import "./styles/themify-icons.css";
import "./styles/flaticon.css";
import {Toaster} from "react-hot-toast";



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
  title: "Personal Portfolio",
  description: "Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
