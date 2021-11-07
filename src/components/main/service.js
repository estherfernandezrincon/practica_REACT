import clients, { setAuthorizationHeader } from "../../api/clients";
//import storage from "../../utils/storage";

//peticion a la api
export const login = (credentials) => {
  return clients.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    //console.log(response);
  });
};

// const token =
//   "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MjdkMzliZC1lNTYyLTRmMWItYTY4My1iN2UwZTU2NmJhMDkiLCJpYXQiOjE2MzYzMTQxNzYsImV4cCI6MTYzNjQwMDU3Nn0.EzgSXw9MzgR8sKDWUWT8RXcoB0jN39L3CzadN1kveJA";

export const getAnuncios = () => {
  const url = "api/v1/adverts";
  //setAuthorizationHeader(token);
  return clients.get(url);
};
