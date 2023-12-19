'use client'

import CardInfoSet from "@/components/CardInfoSet";
import CarruselNewProdTwo from "@/components/Carrusel/CarruselNewProdTwo";
import MainImage from "@/components/MainImage/MainImage";
import VideoPlay from "@/components/VideoPlay/VideoPlay";
import { useStoreUsers } from "@/zustand/store";

export default function Home() {
  const { users } = useStoreUsers((state) => ({
    users: state.users,
  }));
  return (
    <div>
      <MainImage />
      <CarruselNewProdTwo />
      <CardInfoSet/>
      <VideoPlay />
    </div>
  )
}
