/** server/controllers/app.ctrl.js*/
var currApp=null;
var qGlobal=null;
var qSession=null
const enigma = require('enigma.js');
const WebSocket = require('ws');
const schema = require('enigma.js/schemas/12.67.2.json');

module.exports = {
	
	    /**
     * get App by Id
     */
 getApp: (req, res, next) => {

var qOptionsSheet={
	"qOptions": {
		"qTypes": [
			"sheet"
		],
		"qIncludeSessionObjects": false,
		"qData": {}
	}
}
var app_id=decodeURIComponent(req.params.app_id);
var config={
schema,
url: 'ws://localhost:4848/app/'+app_id,
createSocket: url => new WebSocket(url)

};
	
qSession=enigma.create(config);
qSession.open().then((global) => {
  // global === QIX global interface
  qGlobal=global;
  
  qGlobal.openDoc(app_id).then((app) => {
	currApp=app;
	app.getAppProperties().then(function(qProp){res.json({msg:qProp})}
	,(err)=>{ console.log(err);res.json(err)}) ;
  })
  
  
});
					

				
            
},
   
 getSheets: (req,res,next)=>{

 var qOptionsSheet={
	"qOptions": {
		"qTypes": [
			"sheet"
		],
		"qIncludeSessionObjects": false,
		"qData": {}
	}
}

if (req.params.app_id!=null)
{
	app_id=req.params.app_id
	var config={
	schema,
	url: 'ws://localhost:4848/app/'+app_id,
	createSocket: url => new WebSocket(url)

	};

	if (qSession!=null)qSession.close();
	qSession=enigma.create(config);
	qSession.open().then((global) => {
	qGlobal=global;
  
	qGlobal.openDoc(app_id).then((app) => {
	currApp=app;
	currApp.getObjects(qOptionsSheet).then(function(qProp){res.json({msg:qProp})}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	})
	
}
else{
currApp.getObjects(qOptionsSheet).then(function(qProp){res.json({msg:qProp})}
	,(err)=>{ console.log(err);res.json(err)}) ;
}

 } 
}
