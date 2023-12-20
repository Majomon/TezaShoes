"use client"
import CardInfoSet from "../CardInfoSet";
import CarruselNewProdTwo from "../Carrusel/CarruselNewProdTwo";
import MainImage from "../MainImage/MainImage";
import VideoPlay from "../VideoPlay/VideoPlay";

export default function MainHome() {
  return (
    <div>
      <MainImage />
      <CarruselNewProdTwo />
      <CardInfoSet />
      <VideoPlay />
    </div>
  );
}
