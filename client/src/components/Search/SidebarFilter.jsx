import { Button } from "@nextui-org/react"
import { CgClose } from "react-icons/cg"
import AccorditionFilter from "./AccorditionFilter"

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
                    <div className="flex flex-row items-center justify-end px-5 ">
                        <button className="" onClick={() => setIsFilterOpen(false)}>
                            <CgClose size={25} color="black" />
                        </button>
                        {/* <Image className="mx-auto" src={LogoTeza} alt="Logo Teza Shoes" /> */}
                    </div>
                    <ul className="px-6">
                        <li>
                            <Button className=" bg-colorBlack-400 text-colorWhite-100 w-[100%]" radius="none">
                                Aplicar
                            </Button>
                        </li>
                        <li>
                            <AccorditionFilter />
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        
    )
}