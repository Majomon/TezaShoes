"use client";

import CartCards from "./CartCards";

function ItemsCart() {
  const listCart = localStorage.getItem("cart");
  const listCartArray = JSON.parse(listCart);
  console.log(listCartArray);
  return (
    <div className="w-full max-h-[750px] py-6 px-2 overflow-auto">
      {/* <h2 className="text-lg  font-bold">Mi carrito</h2> */}
      {!listCartArray ? (
        <div>Carrito vacio :C</div>
      ) : (
        <div>
          <div className="flex gap-2">
            {/* <h2>Imagen</h2>
            <h2>Nombre</h2>
            <h2>Color</h2>
            <h2>Precio</h2>
            <h2>Cantidad</h2>
            <h2>SubTotal</h2> */}
          </div>
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
