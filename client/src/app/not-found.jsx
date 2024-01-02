'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImagePurse from "../../assets/svg/Purse.svg"
import ImageShoes from "../../assets/svg/Shoes.svg"
import { Button } from "@nextui-org/react";

function NotFound() {
  return (
    <main className="w-full min-h-screen text-black flex flex-row items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center gap-y-[30px]">
        <h1 className=" text-4xl font-semibold">Ooops<span className="">!</span></h1>
        {/* <Image src={fotoError} className="w-[150px] h-[150px]"/> */}
        <p className=" text-2xl text-center w-96 leading-tight tracking-wide ">
          No podemos encontrar la página 
          que estás buscando :(
        </p>
        <Button className=" bg-colorBlack-400 text-colorWhite-100 rounded-none">REGRESAR</Button>
      </div>
      <div className=" border-1 w-[325px] h-[265px]">
        <p>¿</p>
        <p>¿</p>
        <p>?</p>
        <p>?</p>
        <Image src={ImagePurse} width={180}/>
        <Image src={ImageShoes} width={250}/>
      </div>
    </main>
  );
}

export default NotFound;
