import React from "react";

export default function CardInfoIcons({imageSvg,TextInfor}){
    return(
        <div className="h-[100%] w-[200px] flex flex-col items-center justify-between">
            <section className="">
                {imageSvg}
            </section>
            <p className="text-center w-[100%]">{TextInfor}</p>
        </div>
    )   
}