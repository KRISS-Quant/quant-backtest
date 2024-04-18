const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

function checkInputData(req, res) {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ message: 'Invalid input data' });
  }
  next();
}

router.post('/swa', checkInputData, (req, res) => { 
});

module.exports = router;

