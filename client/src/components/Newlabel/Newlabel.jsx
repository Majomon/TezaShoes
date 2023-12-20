
export default function Newlabel({isNew}){
    let newStyle = isNew ? "block" : "hidden";

    return(
        <div className={`bg-colorBlack-400 text-colorWhite-100 w-[80px] h-[45px] flex items-center justify-center absolute z-[100] top-[21px] ${newStyle}`}>
            Nuevo
        </div>
    )
}