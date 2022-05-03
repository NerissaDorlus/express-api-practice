import express, { response } from "express";

import { hi, goodbyePerson, byeNewPerson } from "./src/hi.js";

import { seeYouSoon } from "./src/seeyousoon.js";

const app = express();

app.use(express.json());

const PORT = 3036;

app.get("/hi", hi);

app.post("/hi", byeNewPerson);

app.get("/hi/:person", goodbyePerson);

app.get("/", (request, response) => {
  response.send("So nice to see you again! 👋🏾 ");
});

app.get("/", seeYouSoon);

app.listen(PORT, () => console.log(`listen on http://localhost:${PORT}...`));
