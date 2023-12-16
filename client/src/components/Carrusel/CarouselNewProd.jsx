'use client';

import React, { useState } from "react";
import Card from "../Card";
import { Carousel } from "flowbite-react";

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

export default function CarouselNewProd(){
    const max = 4;

    return(
        <div className="h-[500px] ">
            <Carousel
                theme={false}
                indicators= {true}
                leftControl 
                rightControl
                slideInterval={5000}
                className=" rounded-none "
            >
                <div className="rounded-none cursor-auto flex h-full items-center justify-center gap-x-[23px] bg-green-400 ">
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
                <div className="rounded-none cursor-auto flex h-full items-center justify-center gap-x-[23px] bg-gray-400 dark:bg-gray-700 dark:text-white">
                    {
                        listCarousel.map((item,index) => {
                            const {id,image,title,price,cantDues} = item;
                            
                            return index >= max && index < max*2 ? 
                                <Card
                                    key ={id}
                                    title={title}
                                    price={price}
                                    cantDues={cantDues}
                                />    
                            : ""
                        })
                    }
                </div>
                <div className="rounded-none cursor-auto flex h-full items-center gap-x-[23px] justify-center bg-blue-400">
                {
                        listCarousel.map((item,index) => {
                            const {id,image,title,price,cantDues} = item;
                            
                            return index >= max*2 ? 
                                <Card
                                    key ={id}
                                    title={title}
                                    price={price}
                                    cantDues={cantDues}
                                />    
                            : ""
                        })
                    }
                </div>
            </Carousel>
        </div>
    )
}