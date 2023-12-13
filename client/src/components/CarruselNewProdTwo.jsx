'use client'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay,Navigation,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from './Card';


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
            modules={[Autoplay,Navigation,Pagination]}
            pagination={{ clickable: true }}
            autoplay={{delay: 5000}}
            spaceBetween={50}
            slidesPerView={1}
            className='h-[600px] w-[100%]'
        >
            <SwiperSlide className='w-[100%] h-[100%] bg-slate-500 flex'>
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
            </SwiperSlide>
            <SwiperSlide className='w-[100%] h-[100%] bg-slate-500 '>
                slide 1
            </SwiperSlide>
            <SwiperSlide className='w-[100%] h-[100%] bg-slate-500 '>Slide 2</SwiperSlide>
            <SwiperSlide className='w-[100%] h-[100%] bg-slate-500 '>Slide 3</SwiperSlide>
        </Swiper>
       
    )
}