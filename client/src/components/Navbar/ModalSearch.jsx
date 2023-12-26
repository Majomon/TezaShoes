import { CiSearch } from "react-icons/ci";

function ModalSearch({ isOpenSearch, setIsOpenSearch }) {
  return (
    <div>
      <button className="mx-1">
        <CiSearch size={25} onClick={() => setIsOpenSearch(!isOpenSearch)} />
      </button>
      {isOpenSearch && (
        <div className="w-full h-[50vh] absolute top-16 right-0 px-6 flex flex-col justify-center bg-white rounded-bl-md border-l-1 border-b-1 z-10"></div>
      )}
    </div>
  );
}

export default ModalSearch;
