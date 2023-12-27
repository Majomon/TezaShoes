"use client";
import Link from "next/link";

export default function CardSearchResult({ images, title, price, id }) {
  return (
    <div className="h-[70px] rounded-sm  p-1 flex hover:bg-gray-300 cursor-pointer">
      <section className="w-4/12  h-full relative">
        <Link href={`/detail/${id}`}>
          <img
            className="w-[60px] h-[60px] mx-auto object-cover z-0"
            src={images[0]}
            alt="imageCard"
          />
        </Link>
      </section>
      <section className="w-8/12 h-full py-2 flex flex-col">
        <h2 className="font-semibold uppercase">{title}</h2>
        <p className="font-normal ">${price}</p>
      </section>
    </div>
  );
}
