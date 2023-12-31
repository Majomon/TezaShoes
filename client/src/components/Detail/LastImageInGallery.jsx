export default function LastImageInGallery({index,image,/* handlerSelectImg */}) {
  return (
    <div className=" w-[50px] h-[50px] relative">
      <div className=" bg-white absolute top-0 left-0 w-full h-full opacity-50 flex items-center justify-center " onClick={}/>
      <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-semibold">+5</p>  
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        className="w-full h-full rounded-sm cursor-pointer border-1 border-gray-400"
        /* onClick={() => handlerSelectImg(image)} */
      />
    </div>
  );
}
