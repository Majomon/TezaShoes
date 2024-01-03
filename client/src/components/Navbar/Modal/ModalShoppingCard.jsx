'use client'
import { CiShoppingCart } from "react-icons/ci";
import SidebarCart from "../SidebarCart";
import { useState } from "react";
import { totalSidebarCart } from "@/zustand/store";

function ModalShoppingCard({ isOpenCart, setIsOpenCart }) {
  /* const[totalCart,setTotalCart] = useState(0); */
  const {totalCart,setTotalCart} = totalSidebarCart();

  /* console.log(totalCart) */

  return (
    <div className="mx-1">
      <button onClick={() => setTotalCart()}>
        <CiShoppingCart size={25} onClick={() => setIsOpenCart(true)} />
      </button>
      <SidebarCart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} /* setTotalCart={setTotalCart} totalCart={totalCart} *//>
    </div>
  );
}

export default ModalShoppingCard;
