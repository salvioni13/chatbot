// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require("venom-bot");
const db = require("./models/database");
const { step } = require("../src/models/stages");

bot.create().then((client) => start(client));

async function start(client) {
  await client.onMessage(async (message) => {
    let resp = await db.find(message.from);
    console.log("NEW: " + resp);

    client.sendText(message.from, resp + "");
  });
}

function getStage(user) {
  try {
    let step = db.find(user);
    console.log("STEP: " + step);
    return step;
  } catch (e) {
    console.log(e);
  }

  // if (db.find(user) {
  //     //Se existir esse numero no banco de dados
  //     return db[user].stage;
  // } else {
  //     //Se for a primeira vez que entra e contato
  //     db[user] = {
  //         stage: 0,
  //         itens: [],
  //     };
  //     return db[user].stage;
  // }
}
