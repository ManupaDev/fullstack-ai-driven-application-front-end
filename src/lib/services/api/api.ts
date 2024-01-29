import ky from "ky";

const api = ky.create({
  prefixUrl: "https://ai-driven-backend-production.up.railway.app/api",
  throwHttpErrors: true,
});
export default api;
