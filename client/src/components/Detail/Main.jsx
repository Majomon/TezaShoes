"use client";
import { useStoreProducts } from "@/zustand/store";
import Categorias from "../Categorias/Categorias";
import Carousel from "./Carousel";
import Description from "./Description";
import DetailArticle from "./DetailArticle";
import ShippingCalculator from "./ShippingCalculator";
import { useEffect } from "react";

export default function Main({ product }) {
  const { setDetail } = useStoreProducts();

  useEffect(() => {
    setDetail(product);
  }, [product]);

  return (
    <div className="w-full min-h-screen px-10">
      <div className=" flex">
        <div className="w-8/12 pt-4 px-6">
          <Carousel  />
          <Description  />
        </div>
        <div className="w-4/12 pt-4 px-6">
          <DetailArticle product={product} />
          <ShippingCalculator />
        </div>
      </div>
      <Categorias />
    </div>
  );
}
