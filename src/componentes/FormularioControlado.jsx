import { useState } from "react";

const FormularioControlado = () => {
//Vamos a inicializar esto como un objeto
//Por que todo va a tener las propiedades de input, textarea, select
//y que las prop. que sean iguales a name
//setTodo -- actualiza el objeto gigante
 const [todo, setTodo] = useState({
  todoName:"",
  todoDescripcion:"",
  todoEstado:"pendiente",
  todoCheck: false,
  //Checkbox-- devuelve true o false si esta seleccionado o no.
 });


//handleSubmit es el que procesa el formulario
//Aca es donde se hacen las validaciones
 const [error, setError] = useState(false);

 const handleSubmit = (e) =>{
  e.preventDefault()
  const {todoName, todoDescripcion} = todo;
  if(!todoDescripcion.trim() || !todoName.trim()){
      //console.log(true)
      setError(true);
      return;
  };
//Si pasa la validacion que se no aparezca
     setError(false);
//Un reset
     setTodo({
        todoName:"",
        todoDescripcion:"",
        todoEstado:"pendiente",
        todoCheck: false,
      
       });
  
 };

 const handleChange = (e) => {
 //console.log(e.target.value);
 //console.log(e.target.name);
 //console.log(e.target.type);
 //Construir el objeto de forma dinamica se necesita corchetes [e.target.name]
 //Al name lo utilizamos como un ID
 //Preguntamos si el tipo es checkbox utilizamos el operador ternario "?" nsotros le pasamos e.target.checked
 //para que reciba el true o false y en caso contrario ":" e.target.value
 //Otra opcion desestructuracion
 const {name, value, checked, type} = e.target;

 setTodo({
     ...todo,
              //[e.target.name]: 
     [name]: type === "checkbox" ? checked : value,
             //e.target.type === "checkbox" 
            // ? e.target.checked 
           //: e.target.value,
 });
 };
//Importante react siempre les va a pedir que los componentes que ustedes hagan partan con una mayuscula 
//seperado con otra mayuscula (PintarError)
//No es con llaves {} si no con parentesis ()
  const PintarError = () => (
      <div className="alert alert-danger">Campos Obligatorios</div>
  )

//Vamos a preguntar por el ERROR, en este coso useState()
//En caso de que lo que pusimos sea true nosotros Pintamos el Error con operador ternario ? y :
  return (
    <>
        <h2>Formulario Controlado</h2>

        {
          //En caso de que tengan que devolver un solo elemento(sirven para los null o undefined)
          error && <PintarError />
          //error ? <PintarError /> : null
        }

        <form  onSubmit={handleSubmit}>
      <input 
             name="todoName"
             placeholder="Ingrese Todo"
             type="text"
             className="form-control mb-2"
             //Evento - recibe una funcion la cual cambia el estado
             //Detecta el cambio del input, cada vez que nosotros escribamos lo detecta
             //Traeme lo que tenga el todo y ademas lo que tenga esta propiedad, "actualizala", en caso que no 
             //exista la va agregar.
             //{(e) => setTodo({...todo, todoName: e.target.value })}
             onChange={handleChange}
             //Necesitamos decirle que el input va a tener una relacion con el useState (OBLIGACION)usar value
             value={todo.todoName}

             />
      <textarea
             className="form-control mb-2"
             name="todoDescripcion"
             placeholder="Ingrese descripcion del todo"
             onChange={handleChange}
             value={todo.todoDescripcion}

            

            />
      <select
             className="form-control mb-2"
             name="todoEstado" 
             onChange={handleChange}
             value={todo.todoEstado}
             >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
      </select>

      <div className="form-check">
        <input
             className="form-check-input"
             name="todoCheck"
             type="checkbox"
             //reemplazo de value es checked
             checked={todo.todoCheck}
             id="flexCheckDefault"
             onChange={handleChange}
        />
         <label
             className="form-check-label"
             htmlFor="flexCheckDefault"
         >
               Dar Prioridad
         </label>
</div>
      <button className="btn btn-primary" type="submit">
          Agregar
     </button>  
    </form>
    </>
  )
}

export default FormularioControlado