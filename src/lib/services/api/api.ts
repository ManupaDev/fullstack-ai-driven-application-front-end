import ky from "ky";

const api = ky.create({
  prefixUrl: "http://localhost:8000/api",
});
export default api;
