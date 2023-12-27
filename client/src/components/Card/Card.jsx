"use client";
import { Image } from "@nextui-org/react";
import Newlabel from "../Newlabel/Newlabel";
import Link from "next/link";

export default function Card({ images, title, price, cantDues, newProduct,id }) {
  return (
    <div className=" w-[240px] h-[350px] rounded-md shadow-3xl">
      <section className="w-[100%]  h-[250px] relative">
        <Newlabel newProduct={newProduct} />
        <Link href={`/detail/${id}`}>
          <Image
            className="w-[240px] h-[250px] rounded-t-md rounded-b-none object-cover cursor-pointer z-0"
            src={images[0]}
            alt="imageCard"
          />
        </Link>
      </section>
      <section className="h-[100px] flex flex-col justify-between">
        <div className="w-fullh-full p-4 flex flex-col justify-between bg-colorWhite-100">
          <h2 className="font-semibold uppercase">{title}</h2>
          <p className="font-normal ">${price}</p>
        </div>
        <p className="py-2 rounded-b-lg bg-colorGold-800 text-center font-bold ">
          {cantDues} Cuotas sin interés
        </p>
      </section>
    </div>
  );
}
