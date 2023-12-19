import Link from "next/link";
import { IconArrowRight } from "../../../assets/svg/frequentQuestions";

export default function FrequentQuestions(){
    return(
        <div className="w-full min-h-screen px-16 flex mt-10">
            <ul className="flex flex-row gap-x-[5px]">
                <Link href="/">Inicio</Link>
                <IconArrowRight />
                <p>Preguntas Frecuentes</p>
            </ul>
        </div>
    )
}