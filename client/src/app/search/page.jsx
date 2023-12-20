import Search from "@/components/Search/Search";

async function getAllProducts() {
    const response = await fetch(`${process.env.URL_BASE_DEV}/products`);
    const data = await response.json();
    return data;
}

export default async function (){
    const product = await getAllProducts()
    return(
        <div className="w-full min-h-screen px-16 flex flex-col gap-y-[40px] mt-10"> 
            <Search product={product}/>
        </div>
    )
}