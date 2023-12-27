"use client";

import Link from "next/link";
import Image from "next/image";
import LogoTeza from "../../app/LogoTeza.png";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import {
  iconInstagram,
  iconFacebook,
  iconWhatApp,
  iconEmail,
  iconLocation,
} from "@/utils/iconsContact";

const optionsRedes = [
  {
    name: "Facebook",
    action: "url",
    to: "https://www.facebook.com/",
    icon: iconFacebook,
  },
  {
    name: "Instagram",
    action: "url",
    to: "https://www.instagram.com/",
    icon: iconInstagram,
  },
];

const optionsContact = [
  {
    name: "1159728345",
    action: "url",
    to: "https://wa.me/+5491159728345",
    icon: iconWhatApp,
  },
  {
    name: "Belgrano 170 - San Isidro",
    action: "url",
    to: "https://www.google.com/maps/place/Belgrano+170,+San+Isidro",
    icon: iconLocation,
  },
  { name: "infotezashoes@gmail.com", action: "email", icon: iconEmail },
];
function Footer() {
  return (
    <footer className="w-9/12 h-full mx-auto mb-6">
      <div className="w-full flex justify-between">
        {/* Redes */}
        <div>
          <Image width={90} src={LogoTeza} alt="Logo Teza Shoes" />
          <p className="text-xl pt-3"> Redes Sociales </p>
          <div className="flex gap-6 py-2">
            {optionsRedes.map((elem, index) => (
              <SocialMediaIcons
                key={index}
                action={elem.action}
                to={elem.to}
                icon={elem.icon}
              />
            ))}
          </div>
        </div>
        {/* Menú */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-bold">Menu</h2>
          <p className="text-sm hover:text-gray-950">
            <Link href="/">Inicio</Link>
          </p>
          <p className="text-sm">
            <Link href="/contact">Contactos</Link>
          </p>
          <p className="text-sm">
            <Link href="/frequentQuestions">Preguntas frecuentes</Link>
          </p>
        </div>
        {/* Contactanos */}
        <div>
          <h2 className="text-xl font-bold">Contactanos</h2>
          <div className="flex flex-col gap-y-2">
            {optionsContact.map((elem, index) => (
              <SocialMediaIcons
                key={index}
                action={elem.action}
                to={elem.to}
                icon={elem.icon}
                name={elem.name}
              />
            ))}
          </div>
        </div>
        {/*   <div>
          <p className="text-xl">
            <Link href="/">Ayuda</Link>
          </p>
          <p className="text-sm">
            <Link href="/">Como comprar</Link>
          </p>
          <p className="text-sm">
            <Link href="/">Medios de pago</Link>
          </p>
          <p className="text-sm">
            <Link href="/">Envios</Link>
          </p>
          <p className="text-sm">
            <Link href="/">Política de devolución</Link>
          </p>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
