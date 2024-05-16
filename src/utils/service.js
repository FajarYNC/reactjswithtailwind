import Axios from "axios";

export const httpService = Axios.create({
  baseURL: "https://64c519e4c853c26efada7ffb.mockapi.io/api/v1",
});
