import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import {
  iconEmail,
  iconFacebook,
  iconInstagram,
  iconLocation,
  iconWhatApp,
} from "@/utils/iconsContact";
import Link from "next/link";

const options = [
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
  {
    name: "1122334455",
    action: "url",
    to: "https://www.whatsapp.com/?lang=es_LA",
    icon: iconWhatApp,
  },
  {
    name: "Ubicación",
    action: "url",
    to: "https://www.google.com/maps/@20.2746259,-98.963968,16z?hl=es-MX&entry=ttu",
    icon: iconLocation,
  },
  { name: "Email", action: "email", icon: iconEmail },
];

export default function Contact() {
  return (
    <section className="w-full h-full px-16 ">
      <div className="w-1/3 h-full ">
        <ul className="flex">
          <li>
            <Link href="/">
              <h2 className="text-sm">Inicio</h2>
            </Link>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-4 4l4-4m-4-4l4 4"
            />
          </svg>
          <li>
            <h2 className="text-sm">Contactos</h2>
          </li>
        </ul>
        {/* Redes */}
        <div className="flex flex-col gap-4 pt-6">
          {options.map((elem, index) => (
            <SocialMediaIcons
              key={index}
              name={elem.name}
              action={elem.action}
              to={elem.to}
              icon={elem.icon}
            />
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}
