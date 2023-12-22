"use client";
import { useEffect, useState } from "react";
import CarouselModal from "./CarouselModal";
import { useStoreProducts } from "@/zustand/store";
import { Card, Skeleton } from "@nextui-org/react";

export default function Carousel() {
  const [firstImage, setFirstImage] = useState(null);
  const [imgSelected, setImgSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrayImg, setArrayImg] = useState([]);
  const filteredImages = arrayImg.filter((image) => image !== imgSelected);
  const [newArrayImg, setNewArrayImg] = useState([]);
  const { detail } = useStoreProducts();

  useEffect(() => {
    if (imgSelected) {
      setNewArrayImg([imgSelected, ...filteredImages]);
    }
  }, [imgSelected]);

  useEffect(() => {
    if (detail.images && detail.images.length > 0) {
      setFirstImage(detail.images[0]);
      detail.images.forEach((image) => {
        setArrayImg((prevArrayImg) => [...prevArrayImg, image]);
      });
    }
  }, [detail.images]);

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
    <div className="w-full h-fit flex px-20">
      {!detail.images ? (
        <div className="w-2/12 h-full flex flex-col gap-2 px-2">
          <Card className="w-[50px] h-[50px] flex flex-col p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-[50px] h-[50px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
          <Card className="w-[50px] h-[50px] flex flex-col p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-[50px] h-[50px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
          <Card className="w-[50px] h-[50px] flex flex-col p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-[50px] h-[50px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
          <Card className="w-[50px] h-[50px] flex flex-col p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-[50px] h-[50px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
          <Card className="w-[50px] h-[50px] flex flex-col p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-[50px] h-[50px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
          <Card className="w-[50px] h-[50px] flex flex-col p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-[50px] h-[50px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
          <Card className="w-[50px] h-[50px] flex flex-col p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-[50px] h-[50px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
        </div>
      ) : (
        <div className="w-2/12 h-full flex flex-col gap-2 ">
          {detail.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[50px] h-[50px] rounded-sm  cursor-pointer hover:shadow-md hover:shadow-gray-600 border-1 border-gray-400"
              onClick={() => handlerSelectImg(image)}
            />
          ))}
        </div>
      )}
      {!detail.images ? (
        <div className="w-10/12 h-full">
          <Card className="w-full h-full p-2" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="w-full h-[400px] rounded-sm bg-default-300"></div>
            </Skeleton>
          </Card>
        </div>
      ) : (
        <div className="w-10/12">
          {imgSelected ? (
            <img
              src={imgSelected}
              alt="Descripción de la imagen"
              className="w-full mx-auto h-[400px] rounded-sm  cursor-pointer border-1 border-gray-300"
              onClick={handlerImgModal}
            />
          ) : (
            <img
              src={firstImage}
              alt="Descripción de la imagen"
              className="w-full mx-auto h-[400px] rounded-sm cursor-pointer border-1 border-gray-300"
              onClick={handlerImgModal}
            />
          )}
        </div>
      )}

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
