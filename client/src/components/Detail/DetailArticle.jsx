"use client";
import { useStoreProducts } from "@/zustand/store";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import InfoTopDetailArticle from "./InfoTopDetailArticle";
import { Card, Skeleton } from "@nextui-org/react";
import Counter from "./Counter";

export default function DetailArticle() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [modalBuy, setModalBuy] = useState(false);
  const [productAdd, setProductAdd] = useState("");
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const { detail } = useStoreProducts();

  useEffect(() => {
    if (detail && detail.options && detail.options.length > 0) {
      setSelectedColor(detail.options[0]);
    }
  }, [detail]);

  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
    setSelectedSize(null);
    setMaxCount(0);
    setCount(0);

    // Obtener la opción de color seleccionada con sus tamaños
    const colorOption = detail.options.find(
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

  const closeModal = () => {
    setModalBuy(false);
    // Habilitar el scroll del cuerpo cuando se cierra el modal
    document.body.style.overflow = "visible";
  };

  const addToCart = () => {
    if (!selectedSize) {
      alert("Selecciona un tamaño antes de agregar al carrito");
      return;
    }

    const selectedColorOption = detail.options.find(
      (option) => option.color === selectedColor.color
    );

    const selectedSizeInColor = selectedColorOption.sizes.find(
      (size) => size.size === selectedSize.size
    );

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product_id === detail._id &&
        item.colorId === selectedColorOption._id &&
        item.sizeId === selectedSizeInColor._id , 
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
        product_id: detail._id,
        name: detail.name,
        image: detail.images[0],
        color: selectedColorOption.color,
        colorId: selectedColorOption._id,
        size: selectedSizeInColor.size,
        sizeId: selectedSizeInColor._id,
        count,
        stock: selectedSizeInColor.stock,
        price: detail.price,
        totalPrice: count * detail.price,
      };
      setProductAdd(selectedVariant.name);
      cartItems.push(selectedVariant);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    setModalBuy(true);
    // Mover al inicio de la página
    window.scrollTo(0, 0);
    // Deshabilitar el scroll del cuerpo cuando se muestra el modal
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="w-full">
      <InfoTopDetailArticle />
      <div className="py-2">
        <h5 className="text-sm text-gray-500 py-2">Colores</h5>
        {!detail.options ? (
          <div>
            <Skeleton className="flex rounded-full w-8 h-8 p-4" />
          </div>
        ) : (
          <div className="flex gap-4 py-2">
            {detail &&
              detail.options &&
              detail.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor && selectedColor.color === option.color
                      ? "border-black border-2"
                      : ""
                  }`}
                  style={{ backgroundColor: option.color }}
                  onClick={() => handleColorChange(option)}
                ></button>
              ))}
          </div>
        )}

        <button className="py-2">Guía de talles</button>
        <div className="py-2">
          <h5 className="text-sm text-gray-500">Talles</h5>
          {!detail.options ? (
            <Card className="w-[140px] h-full p-2 my-2" radius="lg">
              <Skeleton className="w-full rounded-lg">
                <div className="h-5  w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Card>
          ) : (
            selectedColor &&
            selectedColor.sizes &&
            selectedColor.sizes.map((size, idx) =>
              size.stock > 0 ? (
                <button
                  key={idx}
                  className={`w-8 h-8 border-2 border-gray-950 mr-2 my-2 ${
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
            )
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <Counter
            count={count}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
          />
          <button
            className="w-9/12 text-white text-sm py-4 px-6 bg-gray-900"
            onClick={addToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      {/* Modal */}
      {modalBuy && (
        <div className="w-full min-h-screen absolute top-16 left-0 flex justify-center bg-gray-100/50 z-10">
          <div className="w-6/12 h-20 flex justify-around items-center bg-white border-2 border-gray-500 shadow-gray-950 shadow-lg ">
            <h2>¡Producto {productAdd} agregado al carrito</h2>
            <button
              className="py-2 px-4 bg-gray-400 text-white rounded-sm hover:bg-gray-700"
              onClick={closeModal}
            >
              Continuar comprando
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
