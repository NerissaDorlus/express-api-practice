import { response } from "express";

export const hi = (request, response) => {
  response.send("Hey! You're here 💕");
};

export const goodbyePerson = (request, response) => {
  const { person } = request.params;
  response.send(`I hate to see you go, ${person}`);
};

export const byeNewPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  response.send("${firstName} ${lastName}, it was a pleasure meeting you.");
};
