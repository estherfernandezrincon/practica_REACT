import { useEffect, useState } from "react";
import { getAnuncios } from "./service";
//import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../layout/Layout";

const noAdverts = () => {
  <div className="anuncio">
    <p>No hay anuncios, ¿ quieres crear uno?</p>
    <button as={Link} to="/nuevoAnuncio">
      Tu Anuncio
    </button>
  </div>;
};

function MainPage({ history, ...props }) {
  const [adverts, setAnuncios] = useState([]);

  useEffect(() => {
    getAnuncios().then((data) => setAnuncios(data));
    //setAnuncios(response.data);
    // console.log(response.data);
  }, []);
  return (
    <Layout title="mis anuncios" {...props}>
      <div className="main">
        {adverts.length !== "" ? (
          <ul>
            {adverts.map((advert) => (
              <li
                key={advert.id}
                onClick={() => history.push(`/anuncios/${advert.id}`)}
              >
                <h3>{advert.name}</h3>

                <ul>{advert.price}</ul>
                <ul>{advert.tags}</ul>
                {advert.sale ? <p>En venta</p> : <p>Busco</p>}
                {advert.tags.map((etiqueta) => (
                  <p>{etiqueta}</p>
                ))}
              </li>
            ))}
          </ul>
        ) : (
          <noAdverts />
        )}
      </div>
    </Layout>
  );
}

export default MainPage;
