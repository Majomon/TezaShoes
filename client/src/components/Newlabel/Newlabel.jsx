
export default function Newlabel(isNew){

    let New = isNew ? "block" : "hidden";


    return(
        <div className={`text-sm  bg-colorBlack-400 text-colorWhite-100 w-[70px] h-[35px] rounded-tr-sm rounded-br-sm flex justify-center items-center absolute z-[100] top-[21px] ${New}`}>
            Nuevo
        </div>
    )
}