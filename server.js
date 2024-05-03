const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 8080;

const upload = multer();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use("/src", express.static(__dirname + "/src"));
app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname + "" } );
});
app.get('/algoMetadata', function(req, res){
  res.sendFile('/algo/algoMetadata.json', { root: __dirname + "" } );
});

app.get('/tickerData', function(req, res){
  res.sendFile('/tickerData.json', { root: __dirname + "" } );
});

app.post('/algo/:algo', upload.single('file'), async (req, res) => {
  try {
    const algorithm = require(`./algo/${req.params.algo}`);
    //console.log("Received data: ", req.body);

    res.json(await algorithm.response(req.body));
  } catch {
    console.error("Error loading algorithm module:", error);
    res.status(500).send("Error loading algorithm");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});