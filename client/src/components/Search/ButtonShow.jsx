import { Button } from "@nextui-org/react";

export default function ButtonShow({setIsActiveShows,isActiveShow}){
    return (
        <Button className=" rounded-none bg-colorBlack-400 text-colorWhite-100 w-[200px] mx-auto" onClick={() => setIsActiveShows(!isActiveShow)}>
            Mostrar Mas
        </Button>
    )
}