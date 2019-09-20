const enginecontroller = require('./../controllers/qengine.ctrl')

module.exports = (router) => {
    /**
     * get All Apps
     */
    router
        .route('/apps')
        .get(enginecontroller.getApps)
		
	/**
     *  create new app
     */
    router
        .route('/apps/create/:name')
        .get(enginecontroller.createApp)	
		
	
   
}