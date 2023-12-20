import Questions from "@/components/Questions/Questions";
import PageRouting from "@/components/PageRouting/PageRouting";

const listFreqPreg = [
    {
        id:1,
        title:"¿Como comprar?",
        text:<ol className=" font-light">
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
    },
    {
        id:2,
        title:"¿Cuanto tiempo tarda un pedido?",
        text:<p className=" font-light">El tiempo de entrega dependerá del tipo de envío seleccionado. En general la demora se encuentra entre 3 y 7 días hábiles luego de acreditado el pago.</p>
    },
    {
        id:3,
        title:"¿Cuál es el plazo para realizar un cambio?",
        text:<p className=" font-light">Puedes solicitar un cambio hasta 15 días luego de realizada la compra.</p>
    },
    {
        id:4,
        title:"¿Qué debo hacer si el producto no llega en buen estado?",
        text:<p className=" font-light">Ponte en contacto con nosotros a INFOTEZASHOES@GMAIL.COM y te enviaremos uno nuevo.</p>
    }
];

export default function FrequentQuestions(){
    return(
        <div className="w-full min-h-screen px-16 flex flex-col gap-y-[40px] mt-10">
            <PageRouting 
                currentRuat={"Preguntas Frecuentes"}
            />
            {
                listFreqPreg.map((item) => {
                    const {id,title,text} = item;
                    return (
                        <Questions 
                            id={id}
                            title={title}
                            text={text}
                        />
                    )
                })
            }
        </div>
    )
}