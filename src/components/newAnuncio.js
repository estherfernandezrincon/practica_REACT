//import { Fragment, useEffect, useState } from "react";

//import { crearAnuncio } from "./service";

import Layout from "../layout/Layout";

function NewAnuncio() {
  return (
    <Layout title="Nuevo">
      <div>nuevo</div>
    </Layout>
  );
}

export default NewAnuncio;

// function create() {
//   const [nuevo, setNuevo] = useState({
//     name: "",
//     price: "",
//     sale: boolean,
//     tags: [],
//   });
//   const [error, setError] = useState(null);

//   const crearAnuncio = () => {
//     setNuevo;
//   };

//   const handleChange = async (event) => {
//     event.preventDefault();
//     try {
//       await create(nuevo);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//   };

//   useEffect(() => {
//     crearAnuncio().then(() => setNuevo(nuevo));
//   }, [nuevo]);

//   return (
//     <Fragment>
//       <h1>Crea tu anuncio</h1>
//       <div className="nuevoAnuncio">
//         <form onSubmit={handleSubmit}>
//           <label className="nombre">Nombre</label>
//           <input
//             type="text"
//             name="name"
//             value={nuevo.name}
//             onChange={handleChange}
//           ></input>
//           <label className="nombre">Precio</label>
//           <input
//             type="number"
//             price="price"
//             value={nuevo.price}
//             onChange={handleChange}
//           ></input>
//           <button type="submit" disabled={!nuevo.name || !nuevo.price}>
//             Crear Anuncio
//           </button>
//         </form>
//       </div>
//     </Fragment>
//   );
// }

// export default create;
