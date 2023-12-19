export default function ({id,title,text}){
    return(
        <section className="flex flex-col gap-y-[20px]" key={id}>
            <h1 className=" font-bold uppercase">{title}</h1>
            {text}
        </section>
    )
}