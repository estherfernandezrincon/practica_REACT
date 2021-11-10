import clients, {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../../api/clients";
import storage from "../../utils/storage";

//peticion a la api
export const login = (credentials) => {
  return clients.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    //console.log(response);
    storage.set("myToken", accessToken);
  });
};

export const logout = () => {
  removeAuthorizationHeader();
  storage.remove("myToken");
};

export const getAnuncios = () => {
  const url = "api/v1/adverts";

  return clients.get(url);
};

export const crearAnuncio = () => {
  const url = "api/v1/adverts";

  return clients.post(url);
};
