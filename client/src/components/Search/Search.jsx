'use client'
import Order from "./Order";
import PageRouting from "../PageRouting/PageRouting";
import { useStoreProducts } from "@/zustand/store";
import { useEffect } from "react";
import Card from "../Card/Card";

export default function Search({product}){
    const { setProducts,allProducts } = useStoreProducts();

    useEffect(()=>{
        setProducts(product)
    },[product]);


    return(
        <div className="flex flex-col gap-y-[20px]">
            <PageRouting currentRuat={"Texanas"}/>
            <Order />
            <section className="flex flex-row md:justify-between justify-center flex-wrap w-[100%] gap-y-[50px] gap-x-[20px] py-16 ">
                {
                    allProducts.map((item)=>{
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