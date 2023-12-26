export default function Counter({count,decrementCount,incrementCount}) {
  return (
    <div className="w-[70px] flex justify-between border-1 border-colorGray-100">
      <button className="flex items-center justify-center bg-red-300 w-[20px]" onClick={decrementCount}>-</button>
      <div>{count}</div>
      <button className="flex flex-col items-center justify-center w-[20px] bg-green-300" onClick={incrementCount}>+</button>
    </div>
  );
}
