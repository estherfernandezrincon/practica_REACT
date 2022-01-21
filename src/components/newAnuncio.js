import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { crearAnuncio } from "./service";

import "./newAnuncio.css";
import Layout from "../layout/Layout";

function NewAnuncio() {
  const [nuevo, setNuevo] = useState({
    name: "",
    sale: "",
    price: "",
    tags: [],
    photo: "",
  });

  const [createAnuncio, setCreateAnuncio] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  const [radioValue, setRadioValue] = useState("sell");
  //const [tags, setTags] = useState([]);
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  // const handleChange = (event) => {
  //   setNuevo((valores) => ({
  //     ...valores,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  const handleChange = (event) => setNuevo(event.target.value);
  const handleChangeRadio = (event) => setRadioValue(event.target.value);
  const handleChangeBox = (event) => setCheckBoxValue(event.target.checked);

  const handleSubmit = async (event) => {
    const formData = new FormData(nuevo);
    formData.append("name", nuevo);
    event.preventDefault();
    try {
      const createdAnuncio = await crearAnuncio(formData);

      setCreateAnuncio(createdAnuncio.id);
    } catch (error) {
      //console.log(error);
      if (error.status === 401) {
        return history.push("/adverts");
      }
      setError(error());
    }
  };

  if (createAnuncio) {
    return <Redirect to={`/adverts/${createAnuncio.id}`} />;
  }

  return (
    <Layout title="Nuevo Anuncio">
      <div className="anuncio">
        <form>
          <form onSubmit={handleSubmit}>
            <label className="label">Nombre</label>
            <input
              type="string"
              name="name"
              value={nuevo.name}
              onChange={handleChange}
            ></input>

            <label className="label">Precio</label>
            <input
              type="number"
              name="price"
              value={nuevo.price}
              onChange={handleChange}
            ></input>
            <label className="label">En Venta</label>
            <input
              type="radio"
              value="sell"
              name="sale"
              ckecked={radioValue === "sell"}
              onChange={handleChangeRadio}
            ></input>
            <label className="label">Compro</label>
            <input
              type="radio"
              value="buy"
              name="sale"
              ckecked={radioValue === "buy"}
              onChange={handleChangeRadio}
            ></input>
            <label className="label">Motor</label>
            <input
              type="checkbox"
              checked={checkBoxValue}
              onChange={handleChangeBox}
            />
            <label className="label">Work</label>
            <input
              type="checkbox"
              checked={checkBoxValue}
              onChange={handleChangeBox}
            />
            <label className="label">lifestyle</label>
            <input
              type="checkbox"
              checked={checkBoxValue}
              onChange={handleChangeBox}
            />
            <label className="label">Mobile</label>
            <input
              type="checkbox"
              checked={checkBoxValue}
              onChange={handleChangeBox}
            />
            {/* <select
              value={tags}
              onchange={(event) => {
                setTags(
                  [...event.target.selectedOptions].map(
                    (elements) => elements.value
                  )
                );
              }}
              multiple
            >
              <option value="motor">Motor</option>
              <option value="lifeStyle">Lifestyle</option>
              <option value="mobile">Mobile</option>
              <option value="work">Work</option>
            </select> */}
            <button
              className="btn"
              type="submit"
              disabled={!nuevo.name || !nuevo.price || !nuevo.sale}
            >
              Crear Anuncio
            </button>
          </form>
        </form>
      </div>
    </Layout>
  );
}

export default NewAnuncio;
