"use client";
import { Image } from "@nextui-org/react";
import Newlabel from "../Newlabel/Newlabel";
import Link from "next/link";

export default function Card({ images, title, price, cantDues, isNew,id }) {
  return (
    <div className=" w-[300px] h-[380px] rounded-t-lg rounded-b-lg shadow-3xl">
      <section className="h-[300px] w-[100%] relative">
        <Newlabel isNew={isNew} />
        <Link href={`/detail/${id}`}>
          <Image
            className="w-[300px] h-[300px] rounded-t-lg rounded-b-none object-cover cursor-pointer"
            src={images[0]}
            alt="imageCard"
          />
        </Link>
      </section>
      <section className="h-[80px] flex flex-col justify-between">
        <div className="flex flex-col justify-center p-[5px] bg-colorWhite-100">
          <h2 className=" font-semibold uppercase">{title}</h2>
          <p className=" font-normal ">${price}</p>
        </div>
        <p className=" rounded-b-lg bg-colorGold-800 text-center ">
          {cantDues} Cuotas sin interés
        </p>
      </section>
    </div>
  );
}
