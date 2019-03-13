/** server/controllers/qengine.ctrl.js*/
const enigma = require('enigma.js');
const WebSocket = require('ws');
const schema = require('enigma.js/schemas/12.67.2.json');
var qixGlobal=null;
var qixSession=null


const qix_config = {
  schema,
  url: 'ws://localhost:4848/app/engineData',
  //url: 'wss://playground-sense.qlik.com:4747/app/engineData',
  createSocket: url => new WebSocket(url)
  
};


module.exports = {
    /**
     * Get All Apps
     */
getApps: (req, res, next) => {
	   
qixSession=enigma.create(qix_config);
qixSession.open().then((global) => {
  qixGlobal=global;
  qixGlobal.getDocList().then(function(list){res.json({msg:list})});
 },(err)=>{ console.log(err);res.json(err)});
		
		
}
        
}
