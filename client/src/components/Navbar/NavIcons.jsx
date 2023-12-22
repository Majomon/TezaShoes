"use client";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import ModalShoppingCard from "./ModalShoppingCard";
import { useState } from "react";

export default function NavIcons() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <div className="flex flex-1 justify-end items-center mx-10">
      <button className="mx-1">
        <CiSearch size={25} />
      </button>
      <button className="mx-1">
        <CiUser size={25} />
      </button>
      <ModalShoppingCard
        isOpenCart={isOpenCart}
        setIsOpenCart={setIsOpenCart}
      />
    </div>
  );
}
