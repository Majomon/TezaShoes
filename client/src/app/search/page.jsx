import Search from "@/components/Search/Search";

export const metadata = {
    title: "TezaShoes - Search",
    description: "Search en la web de TezaShoes",
  };
async function getAllProducts() {
    const response = await fetch(`${process.env.URL_BASE_DEV}/products`);
    const data = await response.json();
    return data;
}

export default async function (){
    const product = await getAllProducts();
    return(
        <div className="w-full h-[90vh] px-16 flex flex-col gap-y-[40px] mt-10"> 
            <Search product={product}/>
        </div>
    )
}