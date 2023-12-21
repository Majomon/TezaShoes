"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import imageCard from "../../../assets/image/fotoCategoria.jpeg";

export default function Card({ image,category }) {
  console.log(category);
  return (
    <div className=" w-[300px] h-[300px] rounded-t-lg rounded-b-lg shadow-3xl">
      <section className="h-[300px] w-[100%] relative">
        <Image
          className="w-[300px] h-[300px] rounded-t-lg rounded-b-lg object-cover cursor-pointer z-0"
          src={imageCard.src}
          alt="imageCard"
        />
        <h2 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold uppercase z-1 rounded-b-lg">
          {category}
        </h2>
      </section>
    </div>
  );
}
