import { Button } from "@nextui-org/react";

export default function TotalCart({totalCart}) {
  return (
    <section className="px-[20px] Py-[5px] border-t-1 border-colorBlack-400 flex flex-col gap-y-[10px]">
      <article className="flex flex-row justify-between">
        <h3 className=" text-lg font-light">Total</h3>
        <p className=" text-lg font-semibold">${totalCart}</p>
      </article>
      <Button className=" bg-colorBlack-400 text-colorWhite-100 w-[100%] rounded-none">
        Completar Compra
      </Button>
    </section>
  );
}
