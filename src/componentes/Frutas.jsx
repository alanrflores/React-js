const Frutas = () => {

const frutas = ["🍕", "🍔", "🍟"];
  return (
    <>
        <ul>
            {frutas.map((fruta, index)=> (
               <li key={fruta}>
                    {index + 1} - {fruta}
               </li>
            ))}
        </ul>
        <p>Lorem ipsum dolor sit amet.</p>
   </>
  )
}

export default Frutas