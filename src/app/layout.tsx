import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Mahmoud",
  description:
    "Welcome to the portfolio of Mohamed Mahmoud, a skilled MERN stack developer specializing in crafting dynamic, high-performance web applications. Explore my projects and discover how I leverage MongoDB, Express.js, React, and Node.js to create seamless, scalable solutions that drive business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="overflow-hidden cursor-none">{children}</div>
      </body>
    </html>
  );
}
