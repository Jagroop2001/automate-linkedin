import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: './fonts/WorkSans-Regular.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: "Automate LinkedIn Posts",
  description: "A tool to automate and schedule LinkedIn posts efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
