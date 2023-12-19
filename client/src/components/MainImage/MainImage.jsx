import Image from "next/image"
import mainImageHome from "../../../assets/image/mainImageHome.png"

export default function MainImage() {
    return(

        <Image
            src={mainImageHome}
            height={450}
            objectFit={"cover"}
        />

    )
}