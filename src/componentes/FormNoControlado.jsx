import { useRef } from "react";

const FormNoControlado = () => {
//recibe null - lo capturo como si fuera un id y lo paso al ref de la etiqueta form
  const formulario = useRef(null)
//Utilizamos ForMData()
//Le pasamos el mismo formulario como valor- pero useRef para llamar a la documentacion utilizamos .current
//Antes lo capturabamos por id
  const handleSubmit = e => {
      e.preventDefault();

  const data = new FormData(formulario.current)

  const objetoData = Object.fromEntries([...data.entries()]);
  //console.log(...data.entries());
  //Utilizamos ... (spread operation que nos trae la copia de la info)
  //.entries()-- Nos devuelve la llave y el valor 
  //La llave es el name puesto y el valor es defaultValue de la descripcion
  //Object.fromEntries() -- Trae la propiedad y el valor correspondiente a un objeto.

  //Desestructuracion de objetos
  //Validando datos
  const {todoDescripcion, todoName} = objetoData
  if (!todoDescripcion.trim()){
      console.log("Vuelva a escribir")
      return
  }
  console.log("Paso validaciones")
  }
//Hacer un formulario, ese form tiene diferentes inputs, a los inputs hay que colocarle los 'name',
//Es como un ID, siempre tiene que ser unico en cada uno de sus inputs.
//Se le coloco un textarea, unos select y boton.
//El form recibe una referencia, la que ocupamos con un hooks useRef.
//Despues onSubmit es el evento que tiene incorporado react y le pasamos la funcion={handleSubmit}
//Y hacemos lo mismo con e.preventDefault()
//

  return (
    <>
    <h2>No Controlado</h2>

    <form ref={formulario} onSubmit={handleSubmit}>
      <input 
             name="todoName"
             placeholder="Ingrese Todo"
             type="text"
             className="form-control mb-2"
             defaultValue="Tarea #01"

             />
      <textarea
             name="todoDescripcion"
             className="form-control mb-2"
             placeholder="Ingrese descripcion del todo"
             defaultValue="Descripcion Tarea #01"

            />
      <select
             name="todoEstado"
             className="form-control mb-2"
             defaultValue="pendiente"
      >
          <option value="">Pendiente</option>
          <option value="">Completada</option>
      </select>
      <button className="btn btn-primary">Agregar</button>  
    </form>
    </>
  );
};

export default FormNoControlado 