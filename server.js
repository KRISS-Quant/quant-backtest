const express = require('express');
const bodyParser = require('body-parser');
// const usersRouter = require('./routes/usersRoutes');

const app = express();
const port = 8080;

// For parsing JSON bodies
app.use(bodyParser.json());


app.post('/algo/:algo', (req, res) => {
  const algorithm = require(`./algo/${algo}`);

  // data to be passed to the trading algorithm
  const input_data = req.body;
  console.log('Received data:', input_data);

  // data to be derived from the trading algorithm
  const response = {
    message: "data received successfully",
    data: data
  }

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
