const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();
const axios = require('axios');

app.use(bodyParser.json());
  
  const port =  4000;
  app.listen(port, () => console.log(`server is listening on port ${port}`));