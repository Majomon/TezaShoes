'use client';
import React from "react";
import { Image } from "@nextui-org/react";
import imageCard from "../../assets/image/IMG_3700.JPG";

export default function Card({image,title,price,cantDues}){
    return(
        <div className=" w-[300px] h-[380px] rounded-t-lg rounded-b-lg shadow-3xl">
            <section className="h-[300px] w-[100%]">
                {/*no funciona la etiquete imagen. buscar otra forma*/}
                <Image
                    className="w-[300px] h-[300px] rounded-t-lg rounded-b-none object-cover"
                    src={imageCard.src}
                    alt="imageCard"
                />
                {/* <div className=" rounded-t-lg bg-gray-300 w-[100%] h-[100%]"></div> */
                }
            </section>
            <section className="h-[80px] flex flex-col justify-between">
                <div className="flex flex-col justify-center p-[5px] bg-colorWhite-100">
                    <h2 className=" font-semibold uppercase">{title}</h2>
                    <p className=" font-normal ">${price}</p>
                </div>
                <p className=" rounded-b-lg bg-colorGold-800 text-center ">
                    {cantDues} cuotas sin interes
                </p>
            </section>
        </div>
    )
}