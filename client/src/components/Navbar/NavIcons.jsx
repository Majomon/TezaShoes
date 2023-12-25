"use client";
import { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import ModalShoppingCard from "./ModalShoppingCard";
import ModalUser from "./ModalUser";

export default function NavIcons() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);

  return (
    <div className="w-full flex flex-1 justify-end items-center mx-10">
      <div
        className={`${
          !isOpenCart && "hidden"
        } w-full min-h-screen bg-gray-400/25 fixed top-0 left-0 right-0 backdrop-blur-sm z-10`}
        onClick={() => setIsOpenCart(false)}
      />
      <button className="mx-1">
        <CiSearch size={25} />
      </button>
      <ModalUser isOpenUser={isOpenUser} setIsOpenUser={setIsOpenUser} />
      <ModalShoppingCard
        isOpenCart={isOpenCart}
        setIsOpenCart={setIsOpenCart}
      />
    </div>
  );
}
