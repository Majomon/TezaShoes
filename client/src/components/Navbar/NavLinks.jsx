import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex flex-1 justify-center">
      <ul className="flex">
        <Link
          className="uppercase text-sm  mx-2 cursor-pointer hover:font-bold"
          href={"/"}
        >
          Inicio
        </Link>
        <Link
          className="uppercase text-sm mx-2 cursor-pointer hover:font-bold"
          href={"/frequentQuestions"}
        >
          Preguntas Frecuentes
        </Link>

        <Link
          className="uppercase text-sm mx-2 cursor-pointer hover:font-bold"
          href={"/contact"}
        >
          Contactanos
        </Link>
      </ul>
    </div>
  );
}
