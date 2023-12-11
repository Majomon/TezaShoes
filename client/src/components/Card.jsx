import React from "react";
import { Image } from "@nextui-org/react";
import imageCard from "../../assets/image/IMG_3700.JPG";

export default function Card({image,title,price,cantDues}){
    return(
        <div className=" w-[300px] h-[380px] rounded-t-lg rounded-b-lg shadow-lg">
            <section className="h-[300px] w-[100%]">
                {/*no funciona la etiquete imagen. buscar otra forma*/}
                {/* <Image 
                    width={300}
                    height={300}
                    src={imageCard}
                    alt="imageCard"
                /> */}
                <div className=" rounded-t-lg bg-gray-300 w-[100%] h-[100%]"></div>
            </section>
            <section className="h-[80px] flex flex-col justify-between">
                <div className="flex flex-col justify-center px-[5px]">
                    <h2>titulo</h2>
                    <p>$precio</p>
                </div>
                <p className=" rounded-b-lg bg-red-300 text-center">
                    3 cuotas sin interes
                </p>
            </section>
        </div>
    )
}