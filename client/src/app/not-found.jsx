import React from "react";
import Link from "next/link";
import Image from "next/image";
import fotoError from "../../assets/image/fotoError.png";

function NotFound() {
  return (
    <main className="w-full min-h-screen text-black flex flex-col items-center justify-center overflow-hidden">
      <Image src={fotoError} className="w-[150px] h-[150px]" />
      <p className="text-xl mt-2 mb-2 leading-tight tracking-wide ">
        Página no encontrada, le recomendamos volver a
      </p>
      <p>
        <Link href="/" className="">
          <button className="text-3xl text-colorGold-800">INICIO</button>
        </Link>
      </p>
    </main>
  );
}

export default NotFound;
