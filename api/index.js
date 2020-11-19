require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerUi=require('swagger-ui-express')

const config = require('../config.js')
const restorant = require('./components/restorant/network')
const errors=require('../network/errors')
const app = express()

const swaggerDoc=require('./swagger.json')

//CORS
app.use(cors())
app.options('*', cors()) 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//ROUTE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }));
app.use('/api/restorant', restorant)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

//app.use(cors())
app.use(errors)

app.listen(config.api.port, () => {
  console.log('Api escuchando en el puerto ', config.api.port)
})