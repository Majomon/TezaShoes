"use client";
import { Carousel } from "flowbite-react";

export default function CarouselModal({ images, closeModal, newArrayImg }) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bottom-0 right-0  z-40 bg-black flex justify-center items-center">
      <div className=" absolute z-50 top-6 right-6">
        <h2
          className="text-gray-100 bg-gray-700 p-4 rounded-md cursor-pointer hover:text-yellow-400 hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-400 "
          onClick={() => closeModal()}
        >
          CERRAR
        </h2>
      </div>
      <Carousel>
        {newArrayImg.length > 0
          ? newArrayImg.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={image}
                className="w-5/12 h-4/5 rounded-md shadow-lg shadow-yellow-400"
              />
            ))
          : images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={image}
                className="w-6/12 rounded-md"
              />
            ))}
      </Carousel>
    </div>
  );
}
