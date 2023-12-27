"use client";
import { useStoreProducts } from "@/zustand/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Card from "../Card/Card";
import PageRouting from "../PageRouting/PageRouting";
import { IconFilter } from "../../../assets/svg/IconsPageSearch";
import SidebarFilter from "./SidebarFilter";
import { capitalize } from "@/utils/capitalize";

export default function Search({ product }) {
  const { setProductsFilter, productsFilter, allProducts, setProducts } =
    useStoreProducts();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParamsCategory = useSearchParams().get("category");
  const searchParamsName = useSearchParams().get("name");

  useEffect(() => {
    setProducts(product);
  }, [product]);

  useEffect(() => {
    if (searchParamsCategory) {
      setProductsFilter(
        product.filter((item) => item.category === searchParamsCategory)
      );
    } else if (searchParamsName) {
      setProductsFilter(
        product.filter((item) =>
          item.name.toLowerCase().includes(searchParamsName.toLowerCase())
        )
      );
    }
  }, [product, searchParamsCategory, searchParamsName]);

  const handleOnchangeHightPrice = (e) => {
    const { value } = e.target;
    if (value === "mayor") {
      productsFilter.sort((a, b) => b.price - a.price);
      setProducts(allProducts);
    } else if (value === "menor") {
      productsFilter.sort((a, b) => a.price - b.price);
      setProducts(allProducts);
    }
  };

  const isInvalidData = !searchParamsCategory && !searchParamsName;

  return (
    <div className="w-full h-full flex flex-col gap-y-5">
      {searchParamsName ? (
        <PageRouting currentRuat={"Resultado de busqueda"} />
      ) : (
        <PageRouting currentRuat={searchParamsCategory} />
      )}

      <div className="w-full flex sm:flex-row flex-col gap-y-4  flex-wrap items-center  sm:justify-between">
        {/* Orden */}
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
        {/* Filtro */}
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
      {searchParamsCategory && (
        <h1 className="text-center text-xl">{searchParamsCategory}</h1>
      )}
      {searchParamsName && (
        <h1 className="text-center text-xl">{capitalize(searchParamsName)}</h1>
      )}

      <Suspense fallback={<p>Loading...</p>}>
        <section className="grid grid-cols-13Cards w-[100%] h-full gap-y-12  gap-x-5  place-items-center">
          {productsFilter.map((item) => {
            return (
              <Card
                key={item._id}
                images={item.images}
                title={item.name}
                price={item.price}
                cantDues={item.cantDues}
                isNew={item.newProduct}
                id={item._id}
              />
            );
          })}
        </section>
      </Suspense>
      {isInvalidData && (
        <div className="w-full h-full flex justify-center items-center">
          <h2>Producto no encontrado</h2>
        </div>
      )}
    </div>
  );
}
