import requestImplementation from "./request";

function request(
  url: "/api/{id}",
  method: "get",
  config: {
    parameters: { id: string };
    query: { a?: string; b: number };
  }
): Promise<{
  list: Array<{ id: number; name: string }>;
  current: number;
  total: number;
}>;
function request(
  url: "/api/order",
  method: "post",
  config: {
    data: { a: string; b: number };
  }
): Promise<{ id: string; a: string; b: number }>;

function request(
  url: "/api/order",
  method: "get",
  config: { query: { name: string } }
): Promise<{
  list: Array<{ id: number; name: string }>;
  current: number;
  total: number;
}>;
function request(url: string, method: string, config: any) {
  return requestImplementation(url, method, config);
}

function get(
  url: "/api/{id}",
  config: {
    parameters: { id: string };
    query: { a?: string; b: number };
  }
): Promise<{
  list: Array<{ id: number; name: string }>;
  current: number;
  total: number;
}>;
function get(
  url: "/api/1",
  config: {
    query: { a?: string; b: number };
  }
): Promise<{
  list: Array<{ id: number; name: string }>;
  current: number;
  total: number;
}>;
function get(
  url: "/api/3",
  config: {
    query: { aaa: string };
  }
): Promise<{
  list: Array<{ id: number; name: string }>;
  current: number;
  total: number;
}>;
function get(url: string, config: any) {
  return requestImplementation(url, "get", config);
}

function post(
  url: "/api/1",
  config: {
    data: { a: string; b: number };
  }
): Promise<{
  id: string;
  a: string;
  b: number;
}>;
function post(
  url: "/api/2",
  config: {
    data: { a: number; b: string };
  }
): Promise<{ id: string; a: number; b: string }>;
function post(url: string, config: any) {
  return requestImplementation(url, "post", config);
}

export { get, post, request };
