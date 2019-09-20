/** server/controllers/app.ctrl.js*/
var currApp=null;
var qGlobal=null;
var qSession=null;
const enigma = require('enigma.js');
const WebSocket = require('ws');
const schema = require('enigma.js/schemas/12.67.2.json');
//const server_url= 'wss://playground-sense.qlik.com:4747/app/'
const server_url= 'ws://localhost:4848/app/'

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
url: server_url+app_id,
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
	url: server_url  +app_id,
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
	//console.log("Returing Data");
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
	url: server_url+app_id,
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
		//console.log("created object");
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
	url: server_url+app_id,
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
		//console.log("created object");
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
	url: server_url+app_id,
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
	url: server_url+app_id,
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

 ,
 getObjectDetails: (req,res,next)=>{

 var object_id=app_id=req.params.object_id
if (req.params.app_id!=null)
{
	
	app_id=req.params.app_id
	var config={
	schema,
	url: server_url+app_id,
	createSocket: url => new WebSocket(url)

	};
	
	if (qSession!=null)qSession.close();
	qSession=enigma.create(config);
	qSession.open().then((global) => {
	qGlobal=global;
  
	qGlobal.openDoc(app_id).then((app) => {
	currApp=app;
	currApp.getObject(object_id).then(function(qObject){
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	},(err)=>{ console.log(err);res.json(err)})
	
}
else{
currApp.getObject(object_id).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)})



}

 }, 

 
 
 getMeasureDetails: (req,res,next)=>{

 var measure_id=app_id=req.params.measure_id
if (req.params.app_id!=null)
{
	
	app_id=req.params.app_id
	var config={
	schema,
	url: server_url+app_id,
	createSocket: url => new WebSocket(url)

	};
	
	if (qSession!=null)qSession.close();
	qSession=enigma.create(config);
	qSession.open().then((global) => {
	qGlobal=global;
  
	qGlobal.openDoc(app_id).then((app) => {
	currApp=app;
	currApp.getMeasure(measure_id).then(function(qObject){
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	},(err)=>{ console.log(err);res.json(err)})
	
}
else{
currApp.getMeasure(measure_id).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)})



}

 }
,
 
getDimensionDetails: (req,res,next)=>{

 var dimension_id=app_id=req.params.dimension_id
if (req.params.app_id!=null)
{
	
	app_id=req.params.app_id
	var config={
	schema,
	url: server_url+app_id,
	createSocket: url => new WebSocket(url)

	};
	
	if (qSession!=null)qSession.close();
	qSession=enigma.create(config);
	qSession.open().then((global) => {
	qGlobal=global;
  
	qGlobal.openDoc(app_id).then((app) => {
	currApp=app;
	currApp.getDimension(dimension_id).then(function(qObject){
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)}) ;
	})
	},(err)=>{ console.log(err);res.json(err)})
	
}
else{
currApp.getDimension(dimension_id).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({msg:qProp})
		}, 
		(e)=> {console.log(err);res.json(err)});		
		
	}
	,(err)=>{ console.log(err);res.json(err)})



}

 }
 
,
createSheet: (req,res,next)=>{
	 
 var sheetName = decodeURIComponent(req.params.name);
 var sheetDesc = req.params.desc == null ? "": decodeURIComponent(req.params.desc);

 var qParamsSheet={"qInfo":{"qType":"sheet"},
	"qExtendsId":"",
	"qStateName":"$",
	"qMetaDef":{"title":sheetName,"description":sheetDesc},
	"rank":0,
	"thumbnail":{"qStaticContentUrlDef":null},
	"columns":24,
	"rows":12,
	"cells":[],
	"qChildListDef":{"qData":{"title":"/title"}}}
	
	
	//console.log(JSON.stringify(qParamsSheet));
	
	

if (req.params.app_id!=null)
{
	app_id=req.params.app_id
	var config={
	schema,
	url: server_url  +app_id,
	createSocket: url => new WebSocket(url)

	};

	if (qSession!=null)qSession.close();
	qSession=enigma.create(config);
	
	qSession.open().then((global) => {
	qGlobal=global;
  
	qGlobal.openDoc(app_id).then((app) => {
	currApp=app;
	currApp.createObject(qParamsSheet).then(function(qObject){
		qObject.getLayout().then(function(qProp){
			res.json({"qRequest":"createSheet","qResponseStatus": "success" , "qResponseMsg":qProp})
		}, 
		(e)=> {console.log(err);res.json({"qRequest":"createSheet", "qResponseStatus": "error", "qResponseMsg": null})});		
		
	}
	,(err)=>{ console.log(err);res.json({"qRequest":"createSheet","qResponseStatus": "success" , "qResponseMsg":null})}) ;
	})
	},(err)=>{ console.log(err);res.json({"qRequest":"createSheet","qResponseStatus": "success" , "qResponseMsg":null})})
	
}
else{
currApp.createObject(qParamsSheet).then(function(qObject){
		//console.log("created object");
		qObject.getLayout().then(function(qProp){
			res.json({"qResponseStatus": "success" , "qResponseMsg":qProp})
		}, 
		(e)=> {console.log(err);res.json({"qRequest":"createSheet","qResponseStatus": "success" , "qResponseMsg":null})});		
		
	}
	,(err)=>{ console.log(err);res.json({"qRequest":"createSheet","qResponseStatus": "success" , "qResponseMsg":null})}) ;
}

 } 
 

	}
