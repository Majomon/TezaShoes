"use client";
import { useState } from "react";
import InfoTopDetailArticle from "./InfoTopDetailArticle";
import { toast } from "sonner";

export default function DetailArticle({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.options[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);

  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
    setSelectedSize(null);
    setMaxCount(0);
    setCount(0);

    // Obtener la opción de color seleccionada con sus tamaños
    const colorOption = product.options.find(
      (option) => option.color === selectedOption.color
    );
    if (colorOption) {
      const initialSize = colorOption.sizes.find((size) => size.stock > 0);
      if (initialSize) {
        setSelectedSize(initialSize);
        setMaxCount(initialSize.stock);
      }
    }
  };

  const handleSizeChange = (selectedSize) => {
    setSelectedSize(selectedSize);
    setMaxCount(selectedSize.stock);
    setCount(0);
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

    const selectedSizeInColor = selectedColorOption.sizes.find(
      (size) => size.size === selectedSize.size
    );

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product_id === product._id &&
        item.colorId === selectedColorOption._id &&
        item.size === selectedSizeInColor._id
    );

    if (existingItemIndex !== -1) {
      const existingItem = cartItems[existingItemIndex];
      if (existingItem.count + count > selectedSizeInColor.stock) {
        toast.dismiss(); // Limpiar la alerta existente si hay alguna
        toast.warning(
          `No hay suficiente stock disponible, solo quedan ${
            selectedSizeInColor.stock - existingItem.count
          } unidades. Revisa tu carrito :D`
        );
        return;
      }
      existingItem.count += count;
      existingItem.totalPrice = existingItem.count * existingItem.price;
    } else {
      const selectedVariant = {
        product_id: product._id,
        name: product.name,
        colorId: selectedColorOption._id,
        size: selectedSizeInColor._id,
        count,
        price: product.price,
        totalPrice: count * product.price,
      };
      // Agregar el nuevo elemento al carrito
      cartItems.push(selectedVariant);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <div className="w-full">
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
