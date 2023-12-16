'use client'
/*switer*/
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay,Navigation,Pagination,EffectCube} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
/*importes de componentes*/
import Card from '../Card';

/*listas*/

const listCarousel = [
    {
        id:1,
        image:"none",
        title:"Alejandra",
        price:"39000",
        cantDues:2,
    },
    {
        id:2,
        image:"none",
        title:"Alejandra",
        price:"39000",
        cantDues:2,
    },
    {
        id:3,
        image:"none",
        title:"Alejandra",
        price:"39000",
        cantDues:2,
    },
    {
        id:4,
        image:"none",
        title:"Alejandra",
        price:"39000",
        cantDues:2,
    },
    {
        id:5,
        image:"none",
        title:"remera",
        price:"39000",
        cantDues:2,
    },
    {
        id:6,
        image:"none",
        title:"remera",
        price:"39000",
        cantDues:2,
    },
    {
        id:7,
        image:"none",
        title:"remera",
        price:"39000",
        cantDues:2,
    },
    {
        id:8,
        image:"none",
        title:"remera",
        price:"39000",
        cantDues:2,
    },
    {
        id:9,
        image:"none",
        title:"pantalon",
        price:"39000",
        cantDues:2,
    },
    {
        id:10,
        image:"none",
        title:"pantalon",
        price:"39000",
        cantDues:2,
    },
    {
        id:11,
        image:"none",
        title:"pantalon",
        price:"39000",
        cantDues:2,
    },

];

export default function CarruselNewProdTwo(){
    const max = 4;

    return(
        
        <Swiper
            modules={[Autoplay,Navigation,Pagination,EffectCube]}
            effect={{shadow:true}}
            pagination={{ clickable: true }}
            autoplay={{delay: 8000}}
            spaceBetween={0}
            slidesPerView={1}
            className='h-[600px] w-[100%]'
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    slidesPerGroup:4
                },

            }}
        >
            {
                listCarousel.map((item,index) => {
                    const {id,image,title,price,cantDues} = item;
                    return <SwiperSlide>
                            <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
                                <Card
                                    key ={id}
                                    title={title}
                                    price={price}
                                    cantDues={cantDues}
                                />
                            </div> 
                        </SwiperSlide> 
                     })
            }
            {/* <SwiperSlide className='w-[100%] h-[100%] bg-colorWhite-100' >
                 <div className='w-[100%] h-[100%] flex items-center justify-center gap-x-[23px]'>        
                    {
                        listCarousel.map((item,index) => {
                            const {id,image,title,price,cantDues} = item;
                            return index < max ? 
                                <Card
                                    key ={id}
                                    title={title}
                                    price={price}
                                    cantDues={cantDues}
                                /> : "" 
                        })
                    }
                </div>
                
            </SwiperSlide> */}
            {/* <SwiperSlide className='w-[100%] h-[100%] bg-slate-500 border-3'>
                <div className='w-[100%] h-[100%] flex items-center justify-center gap-x-[23px]'>        
                    {
                        listCarousel.map((item,index) => {
                            const {id,image,title,price,cantDues} = item;
                            return index >= max && index < max*2 ? 
                                <Card
                                    key ={id}
                                    title={title}
                                    price={price}
                                    cantDues={cantDues}
                                /> : "" 
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className='w-[100%] h-[100%] bg-slate-500 border-3'>
                <div className='w-[100%] h-[100%] flex items-center justify-center gap-x-[23px]'>        
                    {
                        listCarousel.map((item,index) => {
                            const {id,image,title,price,cantDues} = item;
                            return index >= max*2 && index < max*3 ? 
                                <Card
                                    key ={id}
                                    title={title}
                                    price={price}
                                    cantDues={cantDues}
                                /> : "" 
                        })
                    }
                </div>
            </SwiperSlide> */}
        </Swiper>
       
    )
}