import { Martel } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const martel = Martel({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "TezaShoes - Inicio",
  description: "Tienda de zapatos y carteras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={martel.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
