import React from "react";
import { IconComunication,IconCard,IconTruck,IconDevolution } from "../../assets/svg/InformativeIcons";
import CardInfoIcons from "./CardInfoIcons";

const listCardInfo = [
    {
        id: "itemcomunication",
        imageSvg: <IconComunication />,
        textInfo: "metodos de comunicacion",
    },
    {
        id: "itemCard",
        imageSvg: <IconCard />,
        textInfo: "metodos de Pago",
    },
    {
        id: "itemTruck",
        imageSvg: <IconTruck />,
        textInfo: "metodos de envio",
    },
    {
        id: "itemDevolution",
        imageSvg: <IconDevolution />,
        textInfo: "Devolucion",
    },
]

export default function CardInfoSet(){
    return(
        <div className=" flex flex-wrap justify-center gap-x-[150px] gap-y-10 ">
            {
                listCardInfo.map((info) => (                    
                    <CardInfoIcons
                        key={info.id} 
                        imageSvg={info.imageSvg}
                        TextInfor={info.textInfo}
                    />
                ))
            }
        </div>
    )
}