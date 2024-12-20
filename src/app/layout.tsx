import Header from "@/components/header/header";
import "./globals.css";
import "./style.css";
import Footer from "@/components/footer/footer";
import VerticleIcon from "@/components/verticle-icon/verticle-icon"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
        <VerticleIcon/>
      </body>
    </html>
  );
}
