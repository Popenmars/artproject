import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSInit from "./components/AOSInit";

export const metadata: Metadata = {
  title: "Mars Synergy",
  description: "A vibrant platform dedicated to showcasing the diverse expressions of creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
