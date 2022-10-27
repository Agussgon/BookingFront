import { useState } from "react";

// es un hook , no un componente porque no retorna un elemento html
// le pasamos el tipo de input que queremos
const useInput = (type) => {
  // puede ser cualquier valor
  const [value, setValue] = useState("");

  // guardo el valor ingresado en el campo
  const onChange = (e) => {
    setValue(e.target.value);
  };
  //retorno un objeto
  return {
    type,
    value,
    onChange,
  };
};

export default useInput;
