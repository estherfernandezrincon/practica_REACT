import { useEffect, useState } from "react";
import { getAnuncios } from "./service";
//import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NewButton from "./NewButton";

import Layout from "../layout/Layout";

//TODO: Mostrar mensaje de no hay anuncios si vacio
const NoAdverts = () => {
  <div className="main">
    <p>No hay anuncios, ¿ quieres crear uno?</p>
    <NewButton as={Link} to="/adverts/new">
      Nuevo Anuncio
    </NewButton>
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
    <Layout title="Mis Anuncios" {...props}>
      <div className="main">
        {adverts.length !== "" ? (
          <ul>
            {adverts.map((advert) => (
              <li
                key={advert.id}
                onClick={() => history.push(`/adverts/${advert.id}`)}
              >
                <h3>{advert.name}</h3>

                <ul>{advert.price}</ul>
                <ul>{advert.tags}</ul>
                <ul>{advert.photo}</ul>
                {advert.sale ? <p>En venta</p> : <p>Busco</p>}
                {advert.tags.map((etiqueta) => (
                  <p>{etiqueta}</p>
                ))}
                <NewButton as={Link} to="/adverts/:id">
                  Detalle
                </NewButton>
              </li>
            ))}
          </ul>
        ) : (
          <NoAdverts />
        )}
      </div>
    </Layout>
  );
}

export default MainPage;
