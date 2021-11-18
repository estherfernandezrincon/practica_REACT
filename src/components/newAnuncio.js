import { useEffect, useState } from "react";

import { crearAnuncio } from "./service";

import Layout from "../layout/Layout";

function NewAnuncio() {
  const [nuevo, setNuevo] = useState({
    name: "",
    price: "number",
    sale: "boolean",
    tags: [],
  });
  //const [error, setError] = useState(null);

  const handleChange = (event) => {
    setNuevo((valores) => ({
      ...valores,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    crearAnuncio().then(() => setNuevo(nuevo));
  }, [nuevo]);

  return (
    <Layout title="Nuevo Anuncio">
      <div className="nuevoAnuncio">
        <form>
          <form onSubmit={handleSubmit}>
            <label className="nombre">Nombre</label>
            <input
              type="text"
              name="name"
              value={nuevo.name}
              onChange={handleChange}
            ></input>
            <label className="nombre">Precio</label>
            <input
              type="number"
              value={nuevo.price}
              onChange={handleChange}
            ></input>
            <label className="nombre">En Venta</label>
            <input
              type="boolean"
              name="sale"
              value={true}
              onChange={handleChange}
            ></input>
            <button type="submit" disabled={!nuevo.name || !nuevo.price}>
              Crear Anuncio
            </button>
          </form>
        </form>
      </div>
    </Layout>
  );
}

export default NewAnuncio;
