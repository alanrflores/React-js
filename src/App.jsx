import Contador from "./componentes/Contador";
import Frutas from "./componentes/Frutas";

const App =()=> {
  const saludo = "Saludo desde mi App"
  
  const colores = {
   primary: "text-primary",
   secondary: "text-danger",   
  };

  const user = true;

  const SaludoBienvenida = ()=> {
       return <h2 className="text-success">Bienvenidos!</h2>
  };

  const SaludoDespedida = () => {
      return <h2 className="text-info">Adioooos!</h2>
  };

  

  const funcionClick = () => {
      console.log("me diste click desde funcion");
  }

  return ( 
     <div className="container">
      <p className={colores.secondary}>{saludo}</p>

      {user ? <SaludoBienvenida /> : <SaludoDespedida />}

      <Contador />

      <Frutas />
      <Frutas />


         <button className="btn btn-primary mt-4"
           onClick={funcionClick}>Comprar</button>
     </div>
  );



};

export default App

