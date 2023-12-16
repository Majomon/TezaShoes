import { Martel } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from '@/components/Footer/Footer';
import Nav from "@/components/Navbar/Nav";

const martel = Martel({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "TezaShoes - Inicio",
  description: "Tienda de zapatos y carteras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={martel.className}>
        <Providers>
          <Nav/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
