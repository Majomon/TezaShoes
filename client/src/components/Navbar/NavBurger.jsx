"use client"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { CiMenuFries } from "react-icons/ci"
import LogoTeza from "../../app/LogoTeza.png"
import Image from "next/image"

export default function NavBurger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-1 items-center mx-10">
      {/* BURGER MENU */}
      <button className="m-4" onClick={() => setIsMenuOpen(true)}>
        <CiMenuFries size={25} />
      </button>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* LOGO */}
      <Image src={LogoTeza} alt="Logo Teza Shoes" />
    </div>
  )
}
