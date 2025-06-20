import { hc } from "hono/client";
import { AppType } from ".";

const client = hc<AppType>("/api");
const res = await client.hello.$get({
  query: {
    name: "Hono",
  },
});

const data = await res.json();

console.log(`${data.message}`);
