const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 8080;

const upload = multer();
app.use(bodyParser.json());

app.post('/algo/:algo', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const fileData = req.file.buffer.toString('utf-8');
    const data = JSON.parse(fileData);

    const algorithm = require(`./algo/${req.params.algo}`);
    console.log("Received data: ", req.body);

    res.json(await algorithm.response(data));
  } catch {
    console.error("Error loading algorithm module:", error);
    res.status(500).send("Error loading algorithm");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
