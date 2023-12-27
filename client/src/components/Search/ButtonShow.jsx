import { Button } from "@nextui-org/react";

export default function ButtonShow({setIsActiveShows,isActiveShow,isHeightCount}){
    return (
        <Button className={  `rounded-none ${isHeightCount < 8 ? "hidden" : "block"} bg-colorBlack-400 text-colorWhite-100 w-[200px] mx-auto my-5`} onClick={() => setIsActiveShows(!isActiveShow)}>
            {isActiveShow ? "Mostar Menos" : "Mostrar Mas"}
        </Button>
    )
}