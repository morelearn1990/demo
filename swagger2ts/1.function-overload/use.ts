import { get, post, request } from "./requestTs";

async function demoRequest() {
  const res3 = await get("/api/{id}", { parameters: { id: "aaa" }, query: { b: 1 } });
  res3.list[0].id;

  const resaa = await request("/api/order", "get", { query: { name: "111" } });
}
