import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohith Alagiri | AWS Data Engineer",
  description: "Professional portfolio of Rohith Alagiri, specializing in AWS Data Engineering, scalable data pipelines, and database optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
