"use client"
import React, { useState } from "react"
import Sidebar from "./Sidebar"
import { CiMenuFries, CiSearch, CiUser, CiShoppingCart } from "react-icons/ci"
import LogoTeza from "../../app/LogoTeza.png"
import Image from "next/image"

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white w-full shadow-md flex h-16 items-center ">

      {/* LEFT */}
      <div className="flex flex-1 items-center mx-10">
        {/* BURGER MENU */}
        <button className="m-4" onClick={() => setIsMenuOpen(true)}>
          <CiMenuFries size={25} />
        </button>
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* LOGO */}
        <Image src={LogoTeza} alt="Logo Teza Shoes" />
      </div>

      {/* CENTER */}
      <div className="flex flex-1 justify-center">
        <ul className="flex">
          <li className="uppercase text-xs mx-2">Preguntas Frecuentes</li>
          <li className="uppercase text-xs mx-2">Contactanos</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 justify-end mx-10">
        <CiSearch size={25} />
        <CiUser size={25}/>
        <CiShoppingCart size={25} />
      </div>
    </nav>
  )
}
