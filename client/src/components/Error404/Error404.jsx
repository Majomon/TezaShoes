import React from "react";
import Link from "next/link";
import Image from "next/image";
import fotoError from '../../../assets/image/fotoError.png'

function Error404() {
  return (
    <main className=" text-black flex flex-col items-center justify-center h-screen overflow-hidden">
        <Image src={fotoError}

        />
        <p className="text-xl mt-2 mb-2 leading-tight tracking-wide ">
          Página no encontrada, le recomendamos volver a 
        </p>
        <p>
          <Link href="/" className="">
            <button className="text-3xl text-colorGold-800">
                INICIO
            </button>
          </Link>
        </p>
    </main>
  );
}

export default Error404;