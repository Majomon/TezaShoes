export default function ContainerColorsAndSizes({ product }) {
  return (
    <div className="py-2">
      <h5 className="text-sm text-gray-500 ">Colores</h5>
      <div className="flex gap-4 py-2">
        {product.options.map((option, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full`}
            style={{ backgroundColor: option.color }}
          ></button>
        ))}
      </div>
      <button className="py-2">Guía de talles</button>
      <div className="py-2">
        <h5 className="text-sm text-gray-500">Talles</h5>
        {product.options.map((option, index) => (
          <div key={index} className="py-2">
            <div className="flex gap-4 py-2">
              {option.sizes.map((size, idx) =>
                size.stock > 0 ? (
                  <button key={idx} className="w-8 h-8 border-2 border-gray-950">
                    {size.size}
                  </button>
                ) : (
                  <button key={idx} className="w-8 h-8 border-2 bg-gray-400 border-gray-400" disabled>
                    {size.size}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
