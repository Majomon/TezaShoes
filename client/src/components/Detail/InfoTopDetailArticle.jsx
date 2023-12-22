import { useStoreProducts } from "@/zustand/store";
import { Card, Skeleton } from "@nextui-org/react";

export default function InfoTopDetailArticle() {
  const { detail } = useStoreProducts();

  return (
    <div className="flex flex-col">
      {!detail.name ? (
        <Card className="w-[140px] h-full p-2 my-2" radius="lg">
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </Card>
      ) : (
        <h2 className="text-lg font-bold py-2">{detail.name}</h2>
      )}
      {!detail.price ? (
        <Card className="w-[140px] h-full p-2 my-2" radius="lg">
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </Card>
      ) : (
        <p className="text-lg font-semibold py-2">${detail.price}</p>
      )}
    </div>
  );
}
