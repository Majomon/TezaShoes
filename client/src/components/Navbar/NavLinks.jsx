import Link from "next/link";

export default function NavLinks() {

  return (
      <div className="flex flex-1 justify-center">
        <ul className="flex">
          <Link className="uppercase text-xs mx-2 cursor-pointer hover:font-bold" href={"/frequentQuestions"}>Preguntas Frecuentes</Link>
          <li className="uppercase text-xs mx-2 cursor-pointer hover:font-bold">Contactanos</li>
        </ul>
      </div>
  )
}
