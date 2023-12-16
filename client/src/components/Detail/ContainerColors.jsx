export default function ContainerColors({ product }) {
  return (
    <div>
      <h5 className="text-sm text-gray-500 ">Colores</h5>
      <div>
        {product.options.map((option, index) => (
          <div key={index} className={`w-[100px] h-[100px] bg-[${option.color}] rounded-full`}>
          <p>{option.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
