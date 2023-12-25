
export default function Newlabel({newProduct}){
    let New = newProduct==true ? "block" : "hidden";


    return(
        <div className={`text-sm  bg-colorBlack-400 text-colorWhite-100 w-[70px] h-[35px] rounded-tr-sm rounded-br-sm flex justify-center items-center absolute z-[5] top-[21px]  ${New}`}>
            Nuevo
        </div>
    )
}