'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Avatar, AvatarIcon} from "@nextui-org/react";
import {AcmeLogo} from "../AcmeLogo";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Bandoleras",
    "Borcegos",
    "Botas",
    "Camperas de jean",
    "Carteras",
    "Sandalias",
    "Texanas",
    "Zapatillas",
    "Oferta",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit font-serif text-4xl">TEZA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
            <Avatar
            icon={<AvatarIcon />}
            classNames={{
              base: "bg-white",
              icon: "text-black/80",
            }}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 8 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}