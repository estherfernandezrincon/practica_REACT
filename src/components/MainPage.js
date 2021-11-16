import { useEffect, useState } from "react";
import { getAnuncios } from "./service";
//import React, { Fragment } from "react";

import Layout from "../layout/Layout";

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
      </div>
    </Layout>
  );
}

export default MainPage;
