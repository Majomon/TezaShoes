
export default function Order(setHightPrice){

    const handleOnclickHightPrice = (e) => {
        const { value } = e.target;
        setHightPrice(value)
    }

    return(
        <div className="flex sm:flex-row flex-col gap-y-[15px] flex-wrap items-center w-[100%] sm:justify-between">
            <section className="flex flex-row items-center gap-x-[10px]">
                <p>Ordenar por</p>
                <select name="select" className="border-2 border-colorBlack-400 w-[150px] h-[45px] outline-none flex items-center justify-center" onClick={handleOnclickHightPrice}>
                    <option value="mayor">Mayor Precio</option>
                    <option value="menor">Menor Precio</option>
                </select>
            </section>
        </div>
    )
}