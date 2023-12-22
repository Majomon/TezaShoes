import { CgClose } from "react-icons/cg"

export default function SidebarFilter({isFilterOpen, setIsFilterOpen}){
    return(
        <div>
                {/* BLUR */}
            <div
                className={`${
                !isFilterOpen && "hidden"
                } bg-gray-400/25 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-10`}
                onClick={() => setIsFilterOpen(false)}
            />

            {/* SIDEBAR */}
            <div
                className={`${
                isFilterOpen ? "w-[300px]" : "w-0"
                } bg-white min-h-screen fixed top-0 right-0 transition-all duration-300 z-30 `}
            >
                <div className={`${!isFilterOpen && "hidden"} pt-3`}>
                    <div className="flex flex-row items-center justify-start px-5 ">
                        <button className="" onClick={() => setIsFilterOpen(false)}>
                            <CgClose size={25} color="black" />
                        </button>
                        {/* <Image className="mx-auto" src={LogoTeza} alt="Logo Teza Shoes" /> */}
                    </div>
                    <ul>
                        <li>hola</li>
                        <li>hola2</li>
                        {/* menuItems.map((item) => (
                        <li key={item.name} className="cursor-pointer px-6 my-2 hover:font-bold hover:underline">
                            <Link className="w-full" href={item.href} onClick={() => setIsFilterOpen(!isFilterOpen)} >
                            {item.name}
                            </Link>
                        </li>
                        )) */}
                    </ul>
                </div>
            </div>
        </div>
        
    )
}