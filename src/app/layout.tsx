import Header from "@/components/header/header";
import "./globals.css";
import "./style.css";
import Footer from "@/components/footer/footer";
import VerticleIcon from "@/components/verticle-icon/verticle-icon"
import HeaderTwo from "@/components/header/header-two"

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
        <HeaderTwo/>
        {children}
        <Footer/>
        <VerticleIcon/>
      </body>
    </html>
  );
}
