'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImagePurse from "../../assets/svg/Purse.svg"
import ImageShoes from "../../assets/svg/Shoes.svg"
import { Button } from "@nextui-org/react";
import "./not-found.css"

function NotFound() {
  return (
    <main className="w-full min-h-screen text-black flex flex-row items-center justify-center gap-x-[133px] overflow-hidden">
      <div className="flex flex-col items-center gap-y-[30px]">
        <h1 className=" text-4xl font-semibold">Ooops<span className="">!</span></h1>
        {/* <Image src={fotoError} className="w-[150px] h-[150px]"/> */}
        <p className=" text-2xl text-center w-96 leading-tight tracking-wide ">
          No podemos encontrar la página 
          que estás buscando :(
        </p>
        <Button className="gradianButton text-colorWhite-100 rounded-none w-[180px]">REGRESAR</Button>
      </div>
      <div className=" w-[325px] h-[265px] relative font-semibold">
        <p className=" text-colorGoldSecundary-500 text-4xl absolute bottom-0 right-[38px] font-semibold">¿</p>
        <p className="text-4xl absolute left-[3px] bottom-[34px] font-semibold">¿</p>
        <p className=" text-colorGoldSecundary-500 text-4xl absolute top-[24px] left-[94px] font-semibold">?</p>
        <p className="text-4xl absolute top-[22px] right-[36px]">?</p>
        <Image src={ImagePurse} width={180} className="absolute right-0 top-0"/>
        <Image src={ImageShoes} width={250} className="absolute bottom-0 left-0"/>
      </div>
    </main>
  );
}

export default NotFound;
