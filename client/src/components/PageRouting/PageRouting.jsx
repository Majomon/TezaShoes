import { IconArrowRight } from "../../../assets/svg/frequentQuestions"
import { Link } from "@nextui-org/react"

export default function PageRouting({currentRuat}){
    return(
        <section className="flex flex-row gap-x-[5px]">
            <Link href="/" className=" text-colorBlack-400">Inicio</Link>
            <IconArrowRight />
            <p>{currentRuat}</p>
        </section>
    )
}