import Link from "next/link";
import FormRegister from "../../components/FormRegister/FormRegister";
import { Toaster } from "sonner";

export const metadata = {
  title: "TezaShoes - Registro",
  description: "Registro de la web de TezaShoes",
};

export default function Register() {
  return (
    <section className="w-full min-h-screen px-20">
      <Toaster position="top-center" />
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-4 4l4-4m-4-4l4 4"
          />
        </svg>
        <li>
          <h2 className="text-sm">Contacto</h2>
        </li>
      </ul>
      <div className="w-4/12 min-h-screen m-auto">
        <FormRegister />
      </div>
    </section>
  );
}
