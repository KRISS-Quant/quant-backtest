const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   bodyParser.json()(req, res, err => {
//     if (err) {
//       console.error(err);
//       return res.sendStatus(400); // Bad request
//     }
//
//     next();
//   });
// });

app.post('/algo/v1/:algo', async (req, res) => {
  if (!req.body) {
    return res.status(400).send("No body received");
  }

  console.log(req.body);

  const algorithm = require(`./algo/v1/${req.params.algo}`);
  res.json(await algorithm.response(req.body));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
