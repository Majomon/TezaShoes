'use client'

import Card from "@/components/Card";
import CarruselNewProdTwo from "@/components/Carrusel/CarruselNewProdTwo";
import Newlabel from "@/components/Newlabel/Newlabel";
import { useStoreUsers } from "@/zustand/store";

export default function Home() {
  const { users } = useStoreUsers((state) => ({
    users: state.users,
  }));
  return (
    <CarruselNewProdTwo />
  )
}
