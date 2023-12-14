import NavIcons from "./NavIcons"
import NavLinks from "./NavLinks"
import NavBurger from "./NavBurger"

export default function Nav() {
  return (
    <nav className="bg-white w-full shadow-md flex h-16 items-center ">
      {/* LEFT */}
      <NavBurger />

      {/* CENTER */}
      <NavLinks />

      {/* RIGHT */}
      <NavIcons />
    </nav>
  )
}
