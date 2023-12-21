'use client'
import PageRouting from "../PageRouting/PageRouting";
import { useStoreProducts } from "@/zustand/store";
import { use, useEffect,useState } from "react";
import Card from "../Card/Card";
import { useSearchParams } from "next/navigation";
/* import Order from "./Order"; */

export default function Search({product}){
    const { setProducts,allProducts } = useStoreProducts();
    const searchParams = useSearchParams().get("query");

    /* console.log(searchParams.get("query")) */

    useEffect(()=>{
       /*  product = product.filter(item => item.category === searchParams.get("query").toString()) */
       if(searchParams){

       }
        setProducts(product.filter(item => item.category === searchParams))
    },[product]);
    
    const handleOnchangeHightPrice = (e) => {
        const { value } = e.target;
        /* console.log(value) */
        if(value === "mayor"){
            allProducts.sort((a,b) => b.price - a.price);
            /* console.log(product); */
            setProducts(allProducts)
        }else if(value === "menor"){
            allProducts.sort((a, b)=> a.price - b.price);
            /* console.log(product); */
            setProducts(allProducts)
        }
    }

   /*  useEffect(()=>{
    },[valueSelect]) */
    console.log(allProducts)

    return(
        <div className="flex flex-col gap-y-[20px]">
            <PageRouting currentRuat={"Texanas"}/>
            {/* <Order /> */}
            <div className="flex sm:flex-row flex-col gap-y-[15px] flex-wrap items-center w-[100%] sm:justify-between">
                <section className="flex flex-row items-center gap-x-[10px]">
                    <p>Ordenar por</p>
                    <select name="select" className="border-2 border-colorBlack-400 w-[150px] h-[45px] outline-none flex items-center justify-center" onChange={handleOnchangeHightPrice}>
                        <option value="mayor">Mayor Precio</option>
                        <option value="menor">Menor Precio</option>
                    </select>
                </section>
            </div>
            <h1 className="text-center text-xl">{searchParams}</h1>
            <section className="flex flex-row md:bg-red-300 md:justify-between justify-center flex-wrap w-[100%] gap-y-[50px] gap-x-[20px] py-16 ">

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