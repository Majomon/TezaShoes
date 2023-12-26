import { useStoreProducts } from "@/zustand/store";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import CardSearchResult from "../CardSearchResult";
import CategoriesSearch from "../CategoriesSearch";

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
  }, [search]);

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

  return (
    <div>
      <button className="mx-1">
        <CiSearch size={25} onClick={() => setIsOpenSearch(!isOpenSearch)} />
      </button>

      {isOpenSearch && (
        <div className="w-full min-h-screen absolute left-0 top-16 z-10">
          <div className="w-full min-h-[50vh] right-0 px-6 flex flex-col justify-center border-b-4 bg-white border-gray-500 z-10">
            <div className="w-6/12 h-full mx-auto flex flex-col py-6">
              <div className="w-full flex border-b-2 py-4">
                <input
                  placeholder="¿Qué estás buscando?"
                  className="w-full"
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
              {/* Aquí puedes renderizar los resultados */}
              {searchResults.length !== 0 && (
                <div className="w-full h-full flex gap-4">
                  {searchResults.map((product) => (
                    <div key={product._id} className="py-4" onClick={()=>setIsOpenSearch(!isOpenSearch)}>
                      <CardSearchResult
                        images={product.images}
                        title={product.name}
                        price={product.price}
                        cantDues={product.cantDues}
                        newProduct={product.newProduct}
                        id={product._id}
                      />
                    </div>
                  ))}
                </div>
              )}
              {search !== "" && searchResults.length === 0 && (
                <p>No se encontraron coincidencias</p>
              )}
              <CategoriesSearch />
            </div>
          </div>
          <div className="w-full  bg-gray-950/80"></div>
        </div>
      )}
    </div>
  );
}

export default ModalSearch;
