"use client";

import { useEffect, useState } from "react";
import CarouselModal from "./CarouselModal";

export default function Carousel({product}) {
  const [firstImage, setFirstImage] = useState(null);
  const [imgSelected, setImgSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrayImg, setArrayImg] = useState([]);
  const filteredImages = arrayImg.filter((image) => image !== imgSelected);
  const [newArrayImg, setNewArrayImg] = useState([]);

  useEffect(() => {
    if (imgSelected) {
      setNewArrayImg([imgSelected, ...filteredImages]);
    }
  }, [imgSelected]);

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      setFirstImage(product.images[0]);
      product.images.forEach((image) => {
        setArrayImg((prevArrayImg) => [...prevArrayImg, image]);
      });
    }
  }, [product.images]);

  const handlerSelectImg = (image) => {
    setImgSelected(image);
  };

  const handlerImgModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-2-full h-fit  flex  rounded-md">
      <div className="w-2/12 h-full flex flex-col gap-2 ">
        {product.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[70px] h-[70px] rounded-sm  cursor-pointer hover:shadow-md hover:shadow-gray-600"
            onClick={() => handlerSelectImg(image)}
          />
        ))}
      </div>

      <div className="w-10/12 mx-auto">
        {imgSelected ? (
          <img
            src={imgSelected}
            alt="Descripción de la imagen"
            className="w-full mx-auto h-[450px] rounded-sm  cursor-pointer"
            onClick={handlerImgModal}
          />
        ) : (
          <img
            src={firstImage}
            alt="Descripción de la imagen"
            className="w-full mx-auto h-[450px] rounded-sm cursor-pointer"
            onClick={handlerImgModal}
          />
        )}
      </div>

      {isModalOpen && (
        <CarouselModal
          images={arrayImg}
          closeModal={closeModal}
          newArrayImg={newArrayImg}
        />
      )}
    </div>
  );
}
