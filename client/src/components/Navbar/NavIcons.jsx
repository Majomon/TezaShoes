"use client";
import { useEffect, useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import ModalShoppingCard from "./Modal/ModalShoppingCard";
import ModalUser from "./Modal/ModalUser";
import ModalSearch from "./Modal/ModalSearch";
import { useStoreProducts } from "@/zustand/store";

export default function NavIcons({ products }) {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const { setProducts, allProducts } = useStoreProducts();

  useEffect(() => {
    if (allProducts.lenght === 0) {
      setProducts(products);
    }
  }, [products]);

  return (
    <div className="w-full flex flex-1 justify-end items-center mx-10">
      <div
        className={`${
          !isOpenCart && "hidden"
        } w-full min-h-screen bg-gray-400/25 fixed top-0 left-0 right-0 backdrop-blur-sm z-10`}
        onClick={() => setIsOpenCart(false)}
      />
      <ModalSearch
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
      />
      <ModalUser isOpenUser={isOpenUser} setIsOpenUser={setIsOpenUser} />
      <ModalShoppingCard
        isOpenCart={isOpenCart}
        setIsOpenCart={setIsOpenCart}
      />
    </div>
  );
}
