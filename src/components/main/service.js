import clients from "../../api/clients";

export const getAnuncios = () => {
  const url = "api/v1/adverts";
  return clients.get(url);
};
