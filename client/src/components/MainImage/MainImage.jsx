import Image from "next/image"
import mainImageHome from "../../../assets/image/mainImageHome.png"
import mainImageHomeMaxSize from "../../../assets/image/mainIMageHomeMaxSize.png"
import mainImagePhone from "../../../assets/image/mainImagePhone.webp"
import { useEffect, useState } from "react"

export default function MainImage() {
    const [activeWidth,setWidthActive]= useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", ()=>{
            setWidthActive(window.innerWidth)
        })
    },[activeWidth])
    
    return(
        <div className=" w-[100%]">
            {
                activeWidth > 750 ? <Image
                    src={mainImageHomeMaxSize}
                    width={1920}
                    /* className=" w-[100%] max-h-[600px]" */
                />: <Image 
                    src={mainImagePhone}
                    width={750}
                    /* className=" w-[100%] min-h-[450px]" */
                />
            }
        </div>

    )
}