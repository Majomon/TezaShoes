export default function Sizes({ product }) {
  return (
    <div className="py-2">
      <h5 className="text-sm text-gray-500">Talles</h5>

      {product.options.map((option, index) => (
        <div key={index} className="py-2">
          <div className="flex gap-4 py-2">
            {option.sizes.map((size, idx) => (
              <button key={idx} className="w-8 h-8 border-2">
                {size.size}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
