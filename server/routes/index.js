// server/routes/index.js
const app = require('./app')
const qengine = require('./qengine')

//const stream = require('./article')
module.exports = (router) => {
    app(router)
	qengine(router)
    //stream(router)
}