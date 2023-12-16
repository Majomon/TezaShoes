import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci"

export default function NavIcons() {
  return (
    <div className="flex flex-1 justify-end mx-10">
      <button className="mx-1">
        <CiSearch size={25} />
      </button>
      <button className="mx-1">
        <CiUser size={25} />
      </button>
      <button className="mx-1">
        <CiShoppingCart size={25} />
      </button>
    </div>
  )
}
