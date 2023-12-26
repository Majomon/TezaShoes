import Categorias from "@/components/Categorias/Categorias";
import { useStoreProducts } from "@/zustand/store";
import { CiSearch } from "react-icons/ci";
import CategoriesSearch from "../CategoriesSearch";
import { useEffect } from "react";

function ModalSearch({ isOpenSearch, setIsOpenSearch }) {
  const { allProducts } = useStoreProducts();
  
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
        <div className="w-full min-h-screen bg-gray-950/60 absolute left-0 z-10">
          <div className="w-full h-[50vh] absolute right-0 px-6 flex flex-col justify-center border-b-4 bg-white border-gray-500 z-10">
            <div className="w-6/12 h-full mx-auto flex flex-col py-6">
              <div className="w-full h-fit flex border-b-2 py-4">
                <input placeholder="¿Qué estás buscando?" className="w-full" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-width="2"
                    d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                  />
                </svg>
              </div>
              <CategoriesSearch
                isOpenSearch={isOpenSearch}
                setIsOpenSearch={setIsOpenSearch}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalSearch;
