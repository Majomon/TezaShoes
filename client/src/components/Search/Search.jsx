"use client";
import { useStoreProducts } from "@/zustand/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Card from "../Card/Card";
import PageRouting from "../PageRouting/PageRouting";
import { IconFilter } from "../../../assets/svg/IconsPageSearch";
import SidebarFilter from "./SidebarFilter";

export default function Search({ product }) {
  const { setProducts, allProducts } = useStoreProducts();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams().get("category");

  useEffect(() => {
    setProducts(product.filter((item) => item.category === searchParams));
  }, [product]);

  const handleOnchangeHightPrice = (e) => {
    const { value } = e.target;
    if (value === "mayor") {
      allProducts.sort((a, b) => b.price - a.price);
      setProducts(allProducts);
    } else if (value === "menor") {
      allProducts.sort((a, b) => a.price - b.price);
      setProducts(allProducts);
    }
  };

  return (
    <div className="flex flex-col gap-y-[20px]">
      <PageRouting currentRuat={"Texanas"} />
      {/* <Order /> */}
      <div className="flex sm:flex-row flex-col gap-y-[15px] flex-wrap items-center w-[100%] sm:justify-between">
        <section className="flex flex-row items-center gap-x-[10px]">
          <p>Ordenar por</p>
          <select
            name="select"
            className="border-2 border-colorBlack-400 w-[150px] h-[45px] outline-none flex items-center justify-center"
            onChange={handleOnchangeHightPrice}
          >
            <option value="mayor">Mayor Precio</option>
            <option value="menor">Menor Precio</option>
          </select>
        </section>
        <section
          className="flex flex-row gap-x-1 items-center justify-center cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <IconFilter />
          <p>Filter</p>
        </section>
      </div>
      <SidebarFilter
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />
      <h1 className="text-center text-xl">{searchParams}</h1>
      <Suspense fallback={<p>loading...</p>}>
        <section className="grid grid-cols-13Cards w-[100%] gap-y-[50px] gap-x-[20px] place-items-center">
          {allProducts.map((item) => {
            const { _id, images, name, price, cantDues, newProduc } = item;

            return (
              <Card
                key={_id}
                images={images}
                title={name}
                price={price}
                cantDues={cantDues}
                isNew={false}
                id={_id}
              />
            );
          })}
        </section>
      </Suspense>
    </div>
  );
}
