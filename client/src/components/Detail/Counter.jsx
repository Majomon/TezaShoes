export default function Counter({count,decrementCount,incrementCount}) {
  return (
    <div className="w-[70px] flex justify-between border-1 border-colorGray-100">
      <button className="flex items-center justify-center w-[20px] font-semibold" onClick={decrementCount}>-</button>
      <div>{count}</div>
      <button className="flex flex-col items-center justify-center w-[20px] font-semibold" onClick={incrementCount}>+</button>
    </div>
  );
}
