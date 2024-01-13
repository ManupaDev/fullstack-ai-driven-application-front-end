import ky from "ky";

const api = ky.create({
  prefixUrl: "http://localhost:8000/api",
  throwHttpErrors: true,
});
export default api;
