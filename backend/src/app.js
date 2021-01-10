const express = require('express');
const routers = require('./routers/index.router');
const cors = require('cors');

const app = express();

//setting
app.set('PORT', process.env.PORT || 4000);

//middlewares
app.set(cors());
app.use(express.json());

//routers
routers(app);

module.exports = app;