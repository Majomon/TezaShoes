import { IconFilter } from "../../../assets/svg/IconsPageSearch";

export default function Order(){
    return(
        <div className="flex flex-row items-center w-[100%] justify-between">
            <section className="flex flex-row items-center gap-x-[10px]">
                <p>Ordenar por</p>
                <select name="select" className="border-2 border-colorBlack-400 w-[150px] h-[45px] outline-none flex items-center justify-center">
                    <option value="mayor">Mayor Precio</option>
                    <option value="menor">Menor Precio</option>
                </select>
            </section>
            <section className="flex flex-row gap-x-[5px] cursor-pointer items-center">
                <IconFilter />
                <p>Filtro</p>
            </section>
        </div>
    )
}