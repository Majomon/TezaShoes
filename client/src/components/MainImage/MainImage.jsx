import Image from "next/image"
import mainImageHome from "../../../assets/image/mainImageHome.png"
import mainImageHomeMaxSize from "../../../assets/image/mainIMageHomeMaxSize.png"
import { useEffect } from "react"

export default function MainImage() {
    useEffect(() => {
        
    },[])

    return(

        <Image
            src={mainImageHomeMaxSize}
            className=" w-[100%] max-h-[600px]"
        />

    )
}