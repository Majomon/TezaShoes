import Link from "next/link"
import { CgClose } from "react-icons/cg"
import LogoTeza from "../../app/LogoTeza.png"
import Image from "next/image"

const menuItems = [
  { name: "Bandoleras", href: "/" },
  { name: "Borcegos", href: "/" },
  { name: "Botas", href: "/" },
  { name: "Camperas", href: "/" },
  { name: "Carteras", href: "/" },
  { name: "Sandalias", href: "/" },
  { name: "Texanas", href: "/" },
  { name: "Zapatillas", href: "/" },
  { name: "Oferta", href: "/" },
  { name: "Log Out", href: "/" }
]

const SideBar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      {/* BLUR */}
      <div
        className={`${
          !isMenuOpen && "hidden"
        } bg-gray-400/25 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`${
          isMenuOpen ? "w-60" : "w-0"
        } bg-white min-h-screen fixed top-0 left-0 transition-all duration-300`}
      >
        <div className={`${!isMenuOpen && "hidden"} pt-3`}>
          <div className="flex flex-row items-center justify-center">
            <button className="mx-2" onClick={() => setIsMenuOpen(false)}>
              <CgClose size={25} color="black" />
            </button>
            <Image className="mx-2" src={LogoTeza} alt="Logo Teza Shoes" />
          </div>

          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="cursor-pointer px-6 my-2 hover:font-bold hover:underline">
                <Link className="w-full" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
