import { useEffect, useState } from "react";
import { getAnuncios } from "./service";
import React, { Fragment } from "react";

function MainPage({ isLogged }) {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    getAnuncios().then((data) => setAnuncios(data));
    // setAnuncios(response.data);
    // console.log(response.data);
  }, []);
  return (
    <Fragment>
      <h1>mis anuncios</h1>
      <div className="main">
        <ul>
          {anuncios.map((anuncio) => (
            <li key={anuncio.id}>{anuncio.name}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default MainPage;
