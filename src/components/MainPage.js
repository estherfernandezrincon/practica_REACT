import { useEffect, useState } from "react";
import { getAnuncios } from "./service";
//import React, { Fragment } from "react";

import Layout from "../layout/Layout";

function MainPage({ ...props }) {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    getAnuncios().then((data) => setAnuncios(data));
    // setAnuncios(response.data);
    // console.log(response.data);
  }, []);
  return (
    <Layout title="mis anuncios" {...props}>
      <div>
        <ul>
          {anuncios.map((anuncio) => (
            <li key={anuncio.id}>
              {anuncio.name}

              <ul>{anuncio.price}</ul>
              <ul>{anuncio.tags}</ul>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default MainPage;
