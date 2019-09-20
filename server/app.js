// server/app.js

/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const cors = require('cors')
const enigma = require('enigma.js');
const WebSocket = require('ws');
//const qixSchema = require('enigma.js/schemas/3.1.json');
const qixSchema = require('enigma.js/schemas/12.170.2.json');



const app = express()
const router = express.Router()




let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});