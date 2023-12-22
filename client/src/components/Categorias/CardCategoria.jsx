"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function Card({ image,category }) {
  return (
    <div className=" w-[310px] h-[400px] rounded-t-lg rounded-b-lg shadow-3xl">
      <Link href={`/search?category=${category}`} className="h-[300px] w-[100%] relative">
        <Image
          className="w-[310px] h-[400px] rounded-t-lg rounded-b-lg object-cover cursor-pointer z-0"
          src={image}
          alt="imageCard"
        />
        <h2 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold uppercase z-1 rounded-b-lg">
          {category}
        </h2>
      </Link>
    </div>
  );
}
