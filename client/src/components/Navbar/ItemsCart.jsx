function ItemsCart() {
  const listCart = localStorage.getItem("cart");
  const listCartArray = JSON.parse(listCart);

  return (
    <div className="w-full h-96 py-6 px-2 overflow-y-auto">
      {/* Aquí se establece la altura máxima (96vh) y se agrega scroll si el contenido excede esta altura */}
      <ul className="w-full">
        {listCartArray.map((item, index) => (
          <li key={index} className="w-full h-full flex justify-center items-center mb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 mr-2" />
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
  );
}

export default ItemsCart;
