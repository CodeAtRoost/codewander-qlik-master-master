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
	},(err)=>{ console.log(err);res.json(err)} )
	
}
else{
currApp.getObjects(qOptionsSheet).then(function(qProp){
	console.log("Returing Data");
	res.json({msg:qProp})
	
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
}

 } 

 ,
 getDimensions: (req,res,next)=>{

 var qParam={"qInfo":{"qType":"DimensionList","qId":""},"qDimensionListDef":{"qType":"dimension","qData":{"title":"/qMetaDef/title","tags":"/qMetaDef/tags","grouping":"/qDim/qGrouping","info":"/qDimInfos"}}}

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
	currApp.createSessionObject(qParam).then(function(qObject){
		console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qDimensionList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	},(err)=>{ console.log(err);res.json(err)})
	
}
else{
currApp.createSessionObject(qParam).then(function(qObject){
		console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qDimensionList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)})



}

 }, 

 getMeasures: (req,res,next)=>{

 var qParam={"qInfo":{"qType":"MeasureList","qId":""},"qMeasureListDef":{"qType":"measure","qData":{"title":"/qMetaDef/title","tags":"/qMetaDef/tags"}}}

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
	currApp.createSessionObject(qParam).then(function(qObject){
		console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qMeasureList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	},(err)=>{ console.log(err);res.json(err)})
	
}
else{
currApp.createSessionObject(qParam).then(function(qObject){
		console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qMeasureList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)})



}

 } 
,
getVariables: (req,res,next)=>{

 var qParam={"qInfo":{"qType":"VariableList","qId":""},"qVariableListDef":{"qType":"variable","qData":{"tags":"/tags"}}}

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
	currApp.createSessionObject(qParam).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qVariableList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	},(err)=>{ console.log(err);res.json(err)})
	
}
else{
currApp.createSessionObject(qParam).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qVariableList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)})



}

 } 

,

getMasterVisualizations: (req,res,next)=>{

 var qParam={"qInfo":{"qType":"masterobject","qId":""},"qAppObjectListDef":{"qType":"masterobject","qData":{"name":"/metadata/name","visualization":"/visualization","tags":"/metadata/tags"}}}

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
	currApp.createSessionObject(qParam).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qAppObjectList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	},(err)=>{ console.log(err);res.json(err)})
	
}
else{
currApp.createSessionObject(qParam).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp.qAppObjectList.qItems})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)})



}

 } 

 
 }
