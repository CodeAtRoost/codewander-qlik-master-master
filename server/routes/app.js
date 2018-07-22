const appcontroller = require('./../controllers/app.ctrl')
const enginecontroller = require('./../controllers/qengine.ctrl')

module.exports = (router) => {
    /**
     * open App and return sheets
     */
    router
        .route('/app/:app_id')
        .get(appcontroller.getApp)
	/**
     * return sheets from current app
     */
    router
        .route('/app/current/sheets')
        .get(appcontroller.getSheets)
	/**
     * open an App and return sheets
     */
    
	router
        .route('/app/:app_id/sheets')
        .get(appcontroller.getSheets)
	
}