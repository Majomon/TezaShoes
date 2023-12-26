function ModalContinue({productAdd,closeModal}) {
  return (
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
  );
}

export default ModalContinue;
