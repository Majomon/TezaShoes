'use client'
import Order from "./Order";
import PageRouting from "../PageRouting/PageRouting";
import { useStoreProducts } from "@/zustand/store";
import { useEffect } from "react";
import Card from "../Card/Card";

export default function Search({products}){
    const { setProducts } = useStoreProducts();

    useEffect(()=>{
        setProducts(products)
    },[products])

    return(
        <div className="flex flex-col gap-y-[20px]">
            <PageRouting currentRuat={"Texanas"}/>
            <Order />
            <section className="w-[100%] grid gap-4 grid-cols-1  grid-rows-3 gap-y-[50px] py-16">
                {
                    products.map((item)=>{
                        const {_id,images,name,price,cantDues,newProduc} = item
                        
                        return <Card
                            key={_id} 
                            images={images}
                            title={name}
                            price={price}
                            cantDues={cantDues}
                            isNew={false}
                            id={_id}
                        />
                    })
                }
            </section>
        </div>
    )
}