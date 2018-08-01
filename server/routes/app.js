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
	
	/**
     * return dimensions from current app
     */
    
	router
        .route('/app/current/dimensions')
        .get(appcontroller.getDimensions)
	/**
     * open an App and return dimensions
     */
    
	router
        .route('/app/:app_id/dimensions')
        .get(appcontroller.getDimensions)
	/**
     * return measures from current app
     */
    
	router
        .route('/app/current/measures')
        .get(appcontroller.getMeasures)
	/**
     * open an App and return measures
     */
    
	router
        .route('/app/:app_id/measures')
        .get(appcontroller.getMeasures)
/**
     * return variables from current app
     */
    
	router
        .route('/app/current/variables')
        .get(appcontroller.getVariables)
	/**
     * open an App and return variables
     */
    
	router
        .route('/app/:app_id/variables')
        .get(appcontroller.getVariables)

/**
     * return master visualizations from current app
     */
    
	router
        .route('/app/current/master_visualizations')
        .get(appcontroller.getMasterVisualizations)
	/**
     * open an App and return master visualizations
     */
    
	router
        .route('/app/:app_id/master_visualizations')
        .get(appcontroller.getMasterVisualizations)

		
}