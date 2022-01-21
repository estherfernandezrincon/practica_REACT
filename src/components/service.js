import clients, {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../api/clients";
import storage from "../utils/storage";

//peticion a la api
export const login = (credentials) => {
  return clients.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    //console.log(response);
    storage.set("myToken", accessToken);
    //storage.setStorageKey("myToken", accessToken);
  });
};

export const recordarContraseña = (token) => {
  setAuthorizationHeader(token);
  storage.setStorageKey("myToken", token);
  console.log(token, "aqui");
};

export const logout = () => {
  removeAuthorizationHeader();
  storage.remove("myToken");
};

export const getAnuncios = () => {
  const url = "api/v1/adverts";
  return clients.get(url);
};

export const crearAnuncio = (formData) => {
  const url = "api/v1/adverts";

  return clients.post(url, formData);
};
