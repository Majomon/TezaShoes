import { useStoreProducts } from "@/zustand/store";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import CardSearchResult from "../CardSearchResult";
import CategoriesSearch from "../CategoriesSearch";
import Link from "next/link";

function ModalSearch({ isOpenSearch, setIsOpenSearch }) {
  const { allProducts } = useStoreProducts();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (value) => {
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handlerChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    if (search !== "") {
      searchHandler(search);
    } else {
      setSearchResults([]);
    }
    if (!isOpenSearch) {
      setSearch("");
      setSearchResults([]);
    }
  }, [search, allProducts]);

  useEffect(() => {
    if (isOpenSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpenSearch]);

  const handleVerTodoClick = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  let displayedResults = searchResults
    .slice()
    .sort((a, b) => b.price - a.price)
    .slice(0, 6);

  return (
    <div>
      <button className="mx-1">
        <CiSearch size={25} onClick={() => setIsOpenSearch(!isOpenSearch)} />
      </button>

      {isOpenSearch && (
        <div className="w-full min-h-screen absolute left-0 top-16 z-10">
          <div className="w-full h-full right-0 px-6 flex flex-col justify-center border-b-4 bg-white border-gray-500 z-10">
            <div className="w-6/12 h-full mx-auto flex flex-col py-6">
              <div className="w-full flex border-b-2 py-4">
                <input
                  placeholder="¿Qué estás buscando?"
                  className="w-full pl-6 focus:outline-none"
                  onChange={handlerChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                  />
                </svg>
              </div>
              {/* Renderizar los resultados */}
              {displayedResults.length !== 0 && (
                <div className="w-full h-full grid grid-cols-3 gap-x-2 my-4">
                  {displayedResults.map((product) => (
                    <div
                      key={product._id}
                      className="py-1"
                      onClick={() => setIsOpenSearch(!isOpenSearch)}
                    >
                      <CardSearchResult
                        images={product.images}
                        title={product.name}
                        price={product.price}
                        id={product._id}
                      />
                    </div>
                  ))}
                </div>
              )}
              {search !== "" && searchResults.length === 0 && (
                <p>No se encontraron coincidencias</p>
              )}
              {/* Mostrar el botón 'Mostrar más' si hay más de 6 resultados */}
              {searchResults.length > 0 && searchResults.length <= 6 && (
                <Link
                  onClick={handleVerTodoClick}
                  href={`/search?name=${search}`}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center"
                >
                  Ver todo
                </Link>
              )}
              <CategoriesSearch />
            </div>
          </div>
          <div
            className="w-full h-[50vh] bg-gray-950/80"
            onClick={() => setIsOpenSearch(!isOpenSearch)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ModalSearch;
