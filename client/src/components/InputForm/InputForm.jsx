"use client";
function InputForm({ inputForm, error, handlerChange, name, options }) {
  return (
    <div >
      {name === "message" ? (
        <div>
          <textarea
            name={name}
            value={inputForm[name]}
            onChange={handlerChange}
            placeholder={options[name] ? options[name] : ""}
            className={`w-full h-32 p-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md shadow-gray-400 ${
              error[name] ? "focus:outline-none" : ""
            }`}
          />
          {error[name] && (
            <span className="text-xs text-red-400">{error[name]}</span>
          )}
        </div>
      ) : (
        <div className="h-14">
          <input
            type="text"
            name={name}
            value={inputForm[name]}
            onChange={handlerChange}
            placeholder={options[name] ? options[name] : ""}
            className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md shadow-gray-400 ${
              error[name] ? "focus:outline-none" : ""
            }`}
          />
          {error[name] && (
            <span className="text-xs text-red-400">{error[name]}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default InputForm;

/* placeholder={name.charAt(0).toUpperCase() + name.slice(1)}  */
