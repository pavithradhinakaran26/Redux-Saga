import axios from "axios";

const Api = axios.create({
  baseURL: "https://6658ef3d5c3617052647fc47.mockapi.io/crud",
});

export default Api;