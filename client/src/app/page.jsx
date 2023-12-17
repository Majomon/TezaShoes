import CarruselNewProdTwo from "@/components/Carrusel/CarruselNewProdTwo";


export default function Home() {
  const { users } = useStoreUsers((state) => ({
    users: state.users,
  }));
  return (
    <CarruselNewProdTwo />
  )
}
