import Link from "next/link";

export default function CardCategoriesSearch({ image, category }) {
  return (
    <div className=" w-[280px] h-[320px] rounded-t-lg rounded-b-lg shadow-3xl">
      <Link
        href={`/search?category=${category}`}
        className="h-[300px] w-[100%] relative"
      >
        <img
          className="w-full h-full rounded-t-lg rounded-b-lg object-cover cursor-pointer z-0"
          src={image}
          alt="imageCard"
        />
        <div className="w-full h-12 flex justify-center items-center absolute bottom-0 left-0 right-0 z-1 rounded-b-lg bg-[#ae9667]/60">
          <h2 className="text-xl text-white text-center font-semibold uppercase ">
            {category}
          </h2>
        </div>
      </Link>
    </div>
  );
}
