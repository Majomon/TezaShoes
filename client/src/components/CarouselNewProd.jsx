'use client';

import React from "react";
import Card from "./Card";
import { Carousel } from "flowbite-react";



export default function CarouselNewProd(){
    return(
        <div className="h-[500px]">
            <Carousel 
                leftControl 
                rightControl
                slideInterval={5000}
                className=" rounded-none "
            >
                <div className="rounded-none cursor-auto flex h-full items-center justify-center gap-x-[23px] bg-green-300 ">
                    <Card 
                        title="remera"
                        price={5000}
                        cantDues={2}
                    />
                    <Card 
                        title="remera"
                        price={5000}
                        cantDues={2}
                    />
                    <Card 
                        title="remera"
                        price={5000}
                        cantDues={2}
                    />
                    <Card 
                        title="remera"
                        price={5000}
                        cantDues={2}
                    />
                </div>
                <div className="rounded-none cursor-auto flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <Card 
                        title="remera"
                        price={5000}
                        cantDues={2}
                    />
                </div>
                <div className="rounded-none cursor-auto flex h-full items-center justify-center bg-blue-400">
                    <Card 
                        title="remera"
                        price={5000}
                        cantDues={2}
                    />
                </div>
            </Carousel>
            <h1>hola</h1>
        </div>
    )
}