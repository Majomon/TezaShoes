import {
  iconFacebook,
  iconInstagram,
  iconWhatApp,
  iconEmail,
  iconLocation,
} from "@/utils/iconsContact";
import Link from "next/link";

export default function Contact() {
  return (
    <section>
      <div>
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
        <div className="flex flex-col gap-4">
          <div className="">
            <Link href="/" className="w-10  h-10 bg-gray-800 rounded-full flex justify-center items-center">
              {iconFacebook}
            </Link>
            <h4 className=" text-sm ">Facebook</h4>
          </div>
          <div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              {iconInstagram}
            </div>
          </div>
          <div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              {iconWhatApp}
            </div>
          </div>
          <div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              {iconLocation}
            </div>
          </div>
          <div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              {iconEmail}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
