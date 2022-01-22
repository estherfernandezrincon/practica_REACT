import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { crearAnuncio } from "./service";

import "./newAnuncio.css";
import Layout from "../layout/Layout";

function NewAnuncio() {
  const [nuevo, setNuevo] = useState({
    name: "",
    sale: "sell",
    price: "",
    tags: [],
    photo: "",
  });

  const [createAnuncio, setCreateAnuncio] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  //const [radioValue, setRadioValue] = useState("sell");

  //const [checkBoxValue, setCheckBoxValue] = useState(false);

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      const tagToAdd = event.target.value;
      if (nuevo.tags.includes(tagToAdd)) {
        setNuevo((valores) => ({
          ...valores,
          tags: nuevo.tags.filter((tag) => tag !== tagToAdd),
        }));
      } else {
        setNuevo((valores) => ({
          ...valores,
          tags: [...nuevo.tags, tagToAdd],
        }));
      }
      return;
    }
    setNuevo((valores) => ({
      ...valores,
      [event.target.name]: event.target.value,
    }));
  };

  //const handleChangeRadio = (event) => setRadioValue(event.target.value);
  // const handleChangeBox = (event) => setCheckBoxValue(event.target.checked);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("tags", nuevo.tags);

    for (let value of formData.values()) {
      console.log(value);
    }
    try {
      const createdAnuncio = await crearAnuncio(formData);

      setCreateAnuncio(createdAnuncio.id);
    } catch (error) {
      //console.log(error);
      if (error.status === 401) {
        return history.push("/adverts");
      }
      setError(error);
    }
  };

  if (createAnuncio) {
    return <Redirect to={`/adverts/${createAnuncio.id}`} />;
  }

  return (
    <Layout title="Nuevo Anuncio">
      <div className="anuncio">
        <form onSubmit={handleSubmit}>
          <label className="label">Nombre</label>
          <input
            type="text"
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
            checked={nuevo.sale === "sell"}
            onChange={handleChange}
          ></input>
          <label className="label">Compro</label>
          <input
            type="radio"
            value="buy"
            name="sale"
            checked={nuevo.sale === "buy"}
            onChange={handleChange}
          ></input>
          <label className="label">Motor</label>
          <input
            value="motor"
            type="checkbox"
            checked={nuevo.tags.includes("motor")}
            onChange={handleChange}
          />
          <label className="label">Work</label>
          <input
            value="work"
            type="checkbox"
            checked={nuevo.tags.includes("work")}
            onChange={handleChange}
          />
          <label className="label">lifestyle</label>
          <input
            value="lifestyle"
            type="checkbox"
            checked={nuevo.tags.includes("lifestyle")}
            onChange={handleChange}
          />
          <label className="label">Mobile</label>
          <input
            value="mobile"
            type="checkbox"
            checked={nuevo.tags.includes("mobile")}
            onChange={handleChange}
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
          <button className="btn" type="submit">
            Crear Anuncio
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default NewAnuncio;
