"use client";

import { useEffect, useState } from "react";
import CartCards from "./CartCards";

function ItemsCart() {
  const listCart = localStorage.getItem("cart");
  const [listCartArray,setListCartArray] = useState(JSON.parse(listCart));
  /* const [listCartItems,setListaCardItems] = useState(listCartArray); */

  useEffect(() => {
    setListCartArray(JSON.parse(listCart))
  },[listCart])

  const handleClickAllDelete = () => {
    setListCartArray([]);
    listCartArray
    localStorage.setItem("cart", JSON.stringify(listCartArray));
  }
  

  
  return (
    <div className="w-full max-h-[750px] py-6 px-2 overflow-auto">
      {!listCartArray/* .length === 0 */ ? (
        <div>Carrito vacio :C</div>
      ) : (
        <div>
          <button className="flex items-center justify-center  bg-red-600 text-colorWhite-100 text-sm w-fit px-2 h-[35px] rounded-md" onClick={handleClickAllDelete}>
            Borrar Todo
          </button>
          <ul className="w-full">
            {listCartArray?.map((item, index) => {
              const { image, name, color, price, count, totalPrice, size } = item;

              return (
                <CartCards
                  key={index}
                  name={name}
                  image={image}
                  color={color}
                  price={price}
                  count={count}
                  totalPrice={totalPrice}
                  size={size}
                />
              );
            })}
          </ul>
        </div>
      )}
      {/* RECORDATORIO - HACER UN TABLA EN LUGAR DE TODO ESTE CHOCLO */}
    </div>
  );
}

export default ItemsCart;
