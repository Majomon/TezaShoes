import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccorditionFilter() {
  const itemOk = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
    >
      <path
        d="M12.8536 0.146453C13.0488 0.341713 13.0488 0.658292 12.8536 0.853552L4.8536 8.8536C4.6583 9.0488 4.34171 9.0488 4.14645 8.8536L0.146453 4.8536C-0.0488175 4.6583 -0.0488175 4.3417 0.146453 4.1464C0.341713 3.9512 0.658292 3.9512 0.853552 4.1464L4.5 7.7929L12.1464 0.146453C12.3417 -0.0488175 12.6583 -0.0488175 12.8536 0.146453Z"
        fill="#AE9667"
      />
    </svg>
  );

  const listColors = [
    {
      id: "red",
      name: "Rojo",
    },
    {
      id: "green",
      name: "Verde",
    },
    {
      id: "yellow",
      name: "Amarillo",
    },
    {
      id: "pink",
      name: "Rosa",
    },
  ];

  const listSize = [
    {
      id: "35",
      name: "35",
    },
    {
      id: "36",
      name: "36",
    },
    {
      id: "37",
      name: "37",
    },
    {
      id: "40",
      name: "40",
    },
  ];

  return (
    <div>
      <Accordion>
        <AccordionItem key="colors" title="Colores">
          <div className="flex flex-col gap-y-[8px]">
            {listColors.map((item) => {
              const { id, name } = item;
              return (
                <label htmlFor="" id={id} className="flex items-center gap-x-2" key={id} >
                  <input
                    className=" w-[20px] h-[20px]  border-1 border-colorBlack-400 checked:before:content-['✔'] text-colorGold-800 text-xl flex items-center justify-center"
                    type="checkbox"
                    style={{ appearance: "none" }}
                  />
                  {name}
                </label>
              );
            })}
          </div>
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem key="Size" title="Talles">
          <div className="flex flex-col gap-y-[8px]">
            {/* <label htmlFor="" id="35" className="flex items-center gap-x-2">
                    <input className=" w-[20px] h-[20px]  border-1 border-colorBlack-400 checked:before:content-['✔'] text-colorGold-800 text-xl flex items-center justify-center" type="checkbox" style={{appearance: "none"}}/> 35
                    </label>
                    <label htmlFor="" id="36">
                    <input type="checkbox" /> 36
                    </label>
                    <label htmlFor="" id="37">
                    <input type="checkbox" /> 37
                    </label>
                    <label htmlFor="" id="40">
                    <input type="checkbox" /> 40
                    </label> */}
            {listSize.map((item) => {
              const { id, name } = item;
              return (
                <label htmlFor="" id={id} className="flex items-center gap-x-2" key={id}>
                  <input
                    className=" w-[20px] h-[20px]  border-1 border-colorBlack-400 checked:before:content-['✔'] text-colorGold-800 text-xl flex items-center justify-center"
                    type="checkbox"
                    style={{ appearance: "none" }}
                  />
                  {name}
                </label>
              );
            })}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
