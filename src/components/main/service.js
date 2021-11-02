import clients, { setAuthorizationHeader } from "../../api/clients";
import storage from "../../utils/storage";

export const login = (credentials) => {
  return clients.post("/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    storage.set("auth", accessToken);
  });
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MjdkMzliZC1lNTYyLTRmMWItYTY4My1iN2UwZTU2NmJhMDkiLCJpYXQiOjE2MzU4OTAxNzEsImV4cCI6MTYzNTk3NjU3MX0.LHDwYWrnTSeLCHtRQRbYUzzB5dQyB7cgLJOtOur0nHU";

export const getAnuncios = () => {
  const url = "api/v1/adverts";
  setAuthorizationHeader(token);
  return clients.get(url);
};
