"use client";
/*switer*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
/*importes de componentes*/
import Card from "../Card/Card";
import { useStoreProducts } from "@/zustand/store";

/*listas*/

/* const listCarousel = [
  {
    id: 1,
    image: "none",
    title: "Alejandra",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 2,
    image: "none",
    title: "Alejandra",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 3,
    image: "none",
    title: "Alejandra",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 4,
    image: "none",
    title: "Alejandra",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 5,
    image: "none",
    title: "remera",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 6,
    image: "none",
    title: "remera",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 7,
    image: "none",
    title: "remera",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 8,
    image: "none",
    title: "remera",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 9,
    image: "none",
    title: "pantalon",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 10,
    image: "none",
    title: "pantalon",
    price: "39000",
    cantDues: 2,
  },
  {
    id: 11,
    image: "none",
    title: "pantalon",
    price: "39000",
    cantDues: 2,
  },
]; */

export default function CarruselNewProdTwo() {
  const { allProducts } = useStoreProducts();
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectCube]}
      effect={{ shadow: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000 }}
      spaceBetween={0}
      slidesPerView={1}
      className=" w-[100%] h-[600px]"
      /* style={{zIndex:"-1"}} */
      breakpoints={{
        slidesPerGroup: 1,
        slidesPerView: 1,
        620: {
          slidesPerView: 2,
          spaceBetween: 0,
          slidesPerGroup: 2,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
        },
        1250: {
          slidesPerView: 5,
          spaceBetween: 0,
          slidesPerGroup: 5,
        },
      }}
    >
      {allProducts.map((item) => {
        const { _id, images, name, price, cantDues,newProduct } = item;
        return (
          <SwiperSlide key={_id} className="">
            <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
              <Card
                key={_id}
                id={_id}
                title={name}
                price={price}
                cantDues={cantDues}
                newProduct={newProduct}
                images={images}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
