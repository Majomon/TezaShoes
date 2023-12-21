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
import CardCategoria from "@/components/Categorias/CardCategoria";
import { useStoreProducts } from "@/zustand/store";

/*listas*/

const listCarousel = [
  { id: 1, name: "Bandoleras", image: "none", href: "/" },
  { id: 2, name: "Borcegos", image: "none", href: "/" },
  { id: 3, name: "Botas", image: "none", href: "/" },
  { id: 4, name: "Camperas de jean", image: "none", href: "/" },
  { id: 5, name: "Carteras", image: "none", href: "/" },
  { id: 6, name: "Sandalias", image: "none", href: "/" },
  { id: 7, name: "Texanas", image: "none", href: "/" },
  { id: 8, name: "Zapatillas", image: "none", href: "/" },
  { id: 9, name: "Oferta", image: "none", href: "/" },
];

export default function Categorias() {
  const { categories } = useStoreProducts();
console.log(categories);
/*     const uniqueCategories = [...new Set(allProducts.map(item => item.category))];
  

  console.log(uniqueCategories); */
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectCube]}
      effect={{ shadow: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000 }}
      spaceBetween={0}
      slidesPerView={1}
      className="h-[450px] w-[100%]"
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
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,
        },
      }}
    >
      {categories.map((item) => {
        const { _id, image, category } = item;
        
        return (
          <SwiperSlide key={_id} className="">
            <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
              <CardCategoria
                key={_id}
                category={category}
                image={image}
                isNew={true}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
