"use client";
function InputForm({ inputForm, error, handlerChange, name }) {
  return (
    <div className="h-14">
      <input
        type="text"
        name={name}
        value={inputForm[name]}
        onChange={handlerChange}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)} 
        className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md  shadow-gray-400 ${
          error[name] ? "focus:outline-none" : ""
        }`}
      />
      {error[name] && (
        <span className="text-xs  text-red-400">{error[name]}</span>
      )}
    </div>
  );
}

export default InputForm;
