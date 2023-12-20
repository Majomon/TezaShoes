"use client";
import { useStoreProducts } from "@/zustand/store";
import CardInfoSet from "../CardInfoSet/CardInfoSet";
import CarruselNewProdTwo from "../Carrusel/CarruselNewProdTwo";
import MainImage from "../MainImage/MainImage";
import VideoPlay from "../VideoPlay/VideoPlay";
import Categorias from "@/components/Categorias/Categorias";
import { useEffect } from "react";

export default function MainHome({ product }) {
  const { setProducts } = useStoreProducts();
  useEffect(() => {
    setProducts(product);
  }, [product]);

  return (
    <div>
      <MainImage />
      <CarruselNewProdTwo />
      <CardInfoSet />
      <VideoPlay />
      <Categorias />
    </div>
  );
}
