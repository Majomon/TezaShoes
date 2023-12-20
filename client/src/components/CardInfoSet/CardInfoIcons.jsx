"use client";

import React from "react";

export default function CardInfoIcons({imageSvg,TextInfor}){
    return(
        <div className=" w-[120px] h-[180px] flex flex-col items-center">
            <section className="">
                {imageSvg}
            </section>
            <p className="text-center w-[100%]">{TextInfor}</p>
        </div>
    )   
}