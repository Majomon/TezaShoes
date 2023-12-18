"use client";
import axios from "axios";
import { useState } from "react";
import InfoTopDetailArticle from "./InfoTopDetailArticle";

export default function DetailArticle({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.options[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);

  useEffect(() => {
    // Al cargar el componente, verifica si el producto ya está en el carrito y ajusta el estado según corresponda
    const existingCartData = localStorage.getItem("cart");
    if (existingCartData) {
      const cartData = JSON.parse(existingCartData);
      const existingItem = cartData.items.find((item) => item._id === product._id);
      if (existingItem) {
        setCount(existingItem.count);
        setMaxCount(existingItem.selectedSize.stock);
      }
    }
  }, [product._id]);
  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
    setSelectedSize(null); // Reiniciar el tamaño seleccionado al cambiar de color
    setMaxCount(0); // Reiniciar el contador al cambiar de color
    setCount(0);
  };

  const handleSizeChange = (selectedSize) => {
    setSelectedSize(selectedSize);
    setMaxCount(selectedSize.stock); // Establecer el límite máximo del contador según el stock disponible
    setCount(0); // Reiniciar el contador al cambiar de tamaño
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };
  const addToCart = () => {
    if (!selectedSize) {
      alert("Selecciona un tamaño antes de agregar al carrito");
      return;
    }
    const selectedColorOption = product.options.find(
      (option) => option.color === selectedColor.color
    );

    // Obtener el tamaño seleccionado dentro de la opción de color seleccionada
    const selectedSizeInColor = selectedColorOption.sizes.find(
      (size) => size.size === selectedSize.size
    );

    // Crear una nueva variante con solo la opción de color y el tamaño seleccionado
    const selectedVariant = {
      _id: product._id,
      images: product.images[0],
      options: [
        {
          color: selectedColorOption.color,
          sizes: [selectedSizeInColor],
        },
      ],
      count,
      price: product.price,
      totalPrice: product.price*count,
      selectedSize: selectedSizeInColor,
    };

    // Obtener los datos actuales del carrito del localStorage
    const existingCartData = localStorage.getItem("cart");
    let cartData = existingCartData
      ? JSON.parse(existingCartData)
      : { items: [] };

    // Agregar el nuevo producto al array existente
    cartData.items.push(selectedVariant);

    // Guardar la información actualizada en el localStorage
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  return (
    <div className="w-4/12 pt-4 px-14">
      <InfoTopDetailArticle product={product} />

      <div className="py-2">
        <h5 className="text-sm text-gray-500">Colores</h5>
        <div className="flex gap-4 py-2">
          {product.options.map((option, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full ${
                selectedColor.color === option.color ? "border-black" : ""
              }`}
              style={{ backgroundColor: option.color }}
              onClick={() => handleColorChange(option)}
            ></button>
          ))}
        </div>
        <button className="py-2">Guía de talles</button>
        <div className="py-2">
          <h5 className="text-sm text-gray-500">Talles</h5>
          {selectedColor.sizes.map((size, idx) =>
            size.stock > 0 ? (
              <button
                key={idx}
                className={`w-8 h-8 border-2 border-gray-950 ${
                  selectedSize && selectedSize._id === size._id
                    ? "border-black"
                    : ""
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size.size}
              </button>
            ) : (
              <button
                key={idx}
                className="w-8 h-8 border-2 bg-gray-400 border-gray-400"
                disabled
              >
                {size.size}
              </button>
            )
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-3/12 flex gap-2">
            <button onClick={decrementCount}>-</button>
            <div>{count}</div>
            <button onClick={incrementCount}>+</button>
          </div>
          <button
            className="w-9/12 text-white text-sm py-4 px-6 bg-gray-900"
            onClick={addToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
