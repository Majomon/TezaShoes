"use client";
import { useStoreProducts } from "@/zustand/store";
import { useEffect } from "react";
import Carousel from "./Carousel";
import Description from "./Description";
import DetailArticle from "./DetailArticle";
import ShippingCalculator from "./ShippingCalculator";
import InterestProduct from "./InterestProduct";

export default function Main({ product, allproduct }) {
  const { setDetail, setProducts } = useStoreProducts();

  useEffect(() => {
    setDetail(product);
    setProducts(allproduct);
  }, [product]);
  
  return (
    <div className="w-full min-h-screen px-10">
      <div className=" flex">
        <div className="w-8/12 pt-4 px-6">
          <Carousel />
          <Description />
        </div>
        <div className="w-4/12 pt-4 px-6">
          <DetailArticle />
          <ShippingCalculator />
        </div>
      </div>
      <InterestProduct />
    </div>
  );
}
