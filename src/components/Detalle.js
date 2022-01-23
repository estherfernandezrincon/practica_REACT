import Layout from "../layout/Layout";
import { detalleAdvert } from "./service";
import { useEffect, useState } from "react";
function Detalle({ name, price, sale, tags, photo }) {
  const [advert, setAdvert] = useState([]);

  useEffect(() => {
    detalleAdvert().then((data) => setAdvert(data));
  }, []);
  return (
    <Layout title="Detalle">
      <div className="main">
        <p>{name}</p>
        <p>{price}</p>
        <p>{sale}</p>
        <p>{tags}</p>
        <p>{photo}</p>
      </div>
    </Layout>
  );
}

export default Detalle;
