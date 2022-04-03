import { useState } from "react";

const Contador = () => {

  const [contador, setContador] = useState(0);

 const aumentar = () => {
     setContador (contador + 1);
     console.log(contador);
 };

  return (
    <>
        <h2>Contador</h2>
        <h3>{contador}</h3>
        <button 
              className="btn btn-dark mb-4"
               onClick={aumentar}>
                        Aumentar
        </button>
        
    </>
  )
}

export default Contador