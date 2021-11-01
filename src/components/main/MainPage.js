import { useEffect, useState } from "react";
import { getAnuncios } from "./service";
function MainPage() {
  const [adverts, setAnuncios] = useState([]);

  useEffect(() => {
    getAnuncios().then((response) => setAnuncios(response.data));
  }, []);
  return (
    <div className="main">
      <ul>
        {adverts.map((anuncio) => (
          <li key={anuncio.id}>{anuncio.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
