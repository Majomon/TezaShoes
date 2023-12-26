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
              <CardCategoria
                key={_id}
                category={name}
                image={image}
                isNew={true}
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
