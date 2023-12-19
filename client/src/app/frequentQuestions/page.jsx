import Link from "next/link";
import { IconArrowRight } from "../../../assets/svg/frequentQuestions";

export default function FrequentQuestions(){
    return(
        <div className="w-full min-h-screen px-16 flex flex-col gap-y-[40px] mt-10">
            <section className="flex flex-row gap-x-[5px]">
                <Link href="/">Inicio</Link>
                <IconArrowRight />
                <p>Preguntas Frecuentes</p>
            </section>
            <section className="flex flex-col gap-y-[20px]">
                <h1 className=" font-semibold uppercase">¿Como comprar?</h1>
                <ol >
                    <li>Elige el producto que deseas comprar.</li>
                    <li>Haz clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</li>
                    <li>Puedes seguir agregando otros productos al carrito o sino haz clic en "Iniciar Compra".</li>
                    <li>Completa tus datos de contacto y haz clic en "Continuar".</li>
                    <li>Ingresa la dirección a donde deseas recibir el producto. Luego haz clic en "Continuar".</li>
                    <li>Selecciona el método de envío que desees y haz clic en "Continuar".</li>
                    <li>Los envíos los realizamos a través de Correo Argentino.</li>
                    <li>Elige el medio de pago.</li>
                    <li>También puedes seleccionar la opción de "A convenir".</li>
                    <li>Una vez que hayas elegido el medio de pago, haz clic en "Continuar".</li>
                    <li>Finalmente en la página de Confirmación de compra puedes revisar toda la información de la compra. Luego haz clic en "Continuar".</li>
                    <li>Ahí serás redirigido a otra pantalla para que completes los datos sobre la forma de pago elegida. Después de confirmar la compra recibirás un correo de nuestra parte, ese no será un comprobante de pago.</li>
                    <li>Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado.</li>
                </ol>
            </section>
        </div>
    )
}