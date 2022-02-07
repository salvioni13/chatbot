const { Pool } = require("pg");

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "chatbot",
  password: "buscar",
  port: 5432,
});

client.connect();

// function find(req, res) {
//   client.query(
//     "SELECT step FROM chats WHERE user_id = $1",
//     [req],
//     function (err, result) {
//       if (err) {
//         console.log(err);
//         res.status(400).send(err);
//       }
//       console.log(result.rows);
//       return result.rows;
//     }
//   );
// }

async function find(req, res) {
  let result = await client
    .query("SELECT step FROM chats WHERE user_id = $1", [req])
    .then((res) => {
      return res.rows;
    })
    .catch((e) => {
      console.error(e.stack);
      return e;
    });

  return result[0].step;
}

module.exports = { find };
