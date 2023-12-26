import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
/*importes de componentes*/
import { useStoreProducts } from "@/zustand/store";
import CardCategoriesSearch from "./CardCategoriesSearch";

export default function CategoriesSearch({ isOpenSearch, setIsOpenSearch }) {
  const { categories } = useStoreProducts();

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectCube]}
      effect={{ shadow: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000 }}
      spaceBetween={0}
      slidesPerView={1}
      className=" w-11/12 h-[300px] mx-auto"
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
        const { _id, image, name } = item;

        return (
          <SwiperSlide key={_id} className="">
            <div className="h-[100%] w-[100%] flex items-center gap-x-2">
              <CardCategoriesSearch
                key={_id}
                category={name}
                image={image}
                isOpenSearch={isOpenSearch}
                setIsOpenSearch={setIsOpenSearch}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
