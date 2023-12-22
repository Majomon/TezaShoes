function ItemsCart() {
  const listCart = localStorage.getItem("cart");
  const listCartArray = JSON.parse(listCart);

  return (
    <div className="w-full h-96 py-6 px-2 overflow-y-auto">
      <h2 className="text-lg  font-bold">Mi carrito</h2>
      {!listCartArray ? (
        <div>Carrito vacio :C</div>
      ) : (
        <div>
          <div className="flex gap-2">
            <h2>Imagen</h2>
            <h2>Nombre</h2>
            <h2>Color</h2>
            <h2>Precio</h2>
            <h2>Cantidad</h2>
            <h2>SubTotal</h2>
          </div>
          <ul className="w-full">
            {listCartArray?.map((item, index) => (
              <li key={index} className="w-full h-full flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mr-2"
                />
                <h2>{item.name}</h2>
                <div
                  className={`w-8 h-8 border-gray-900 border-2 rounded-full`}
                  style={{ backgroundColor: item.color }}
                ></div>
                <p>{item.price}</p>
                <p>{item.count}</p>
                <p>{item.totalPrice}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* RECORDATORIO - HACER UN TABLA EN LUGAR DE TODO ESTE CHOCLO */}
    </div>
  );
}

export default ItemsCart;
