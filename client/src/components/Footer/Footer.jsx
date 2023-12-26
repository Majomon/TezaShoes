"use client";

import Link from "next/link";
import Image from "next/image";
import LogoTeza from "../../app/LogoTeza.png";
import {
  CiInstagram,
  CiFacebook,
  CiPhone,
  CiMail,
  CiLocationOn,
} from "react-icons/ci";

function Footer() {
  return (
    <footer className="w-full h-[145px]">
      <div className="w-full flex justify-evenly ">
        <div>
          <Image width={90} src={LogoTeza} alt="Logo Teza Shoes" />
          <p className="text-xl pt-3"> Redes Sociales </p>
          <div className="flex justify-evenly">
            <Link
              href="https://www.instagram.com/teza.shoes/?hl=es"
              target="_blank"
            >
              <CiInstagram className="text-xl" />
            </Link>
            <Link
              href="https://www.facebook.com/Teza.Shoes/?locale=es_LA"
              target="_blank"
            >
              <CiFacebook className="text-xl" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xl ">Menu</p>
          <p className="text-sm">
            <Link href="/">Inicio</Link>
          </p>
          <p className="text-sm">
            <Link href="/contact">Contactos</Link>
          </p>
          <p className="text-sm">
            <Link href="/frequentQuestions">Preguntas frecuentes</Link>
          </p>
        </div>
        <div>
          <p className="text-xl">Contactanos</p>
          <div className="flex justify-start">
            <CiPhone className="text-xs mt-1" />
            <p className="text-sm">112233445566</p>
          </div>
          <div className="flex justify-start">
            <CiMail className="text-xs mt-1" />
            <p className="text-sm">zapatillas@gmail.com</p>
          </div>
          <div className="flex justify-start">
            <CiLocationOn className="text-xs mt-1" />
            <p className="text-sm">ubicación, ubicación</p>
          </div>
        </div>
        <div>
          <p className="text-xl">
            {" "}
            <Link href="/">Ayuda</Link>
          </p>
          <p className="text-sm">
            {" "}
            <Link href="/">Como comprar</Link>
          </p>
          <p className="text-sm">
            {" "}
            <Link href="/">Medios de pago</Link>
          </p>
          <p className="text-sm">
            {" "}
            <Link href="/">Envios</Link>
          </p>
          <p className="text-sm">
            {" "}
            <Link href="/">Política de devolución</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
