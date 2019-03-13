// src/redux/actions/actions.js
/** */
import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.REACT_APP_QLIK_SERVER_URL;
export function getApps () {
    return (dispatch) => {
        axios.get(`${url}apps`) 
        .then((res) => {
            let qApps = res.data.msg
            dispatch({type:'GET_APPS', qApps})
        }).catch((err) => {
            console.log(err)
        })
    }
}
export function openApp (_id) {
	const id= encodeURIComponent(_id)
	console.log(`${url}app/${id}`)
   return (dispatch) => {
        axios.get(`${url}app/${id}`)
        .then((res) => {
            let qApp = res.data.msg
            dispatch({type: 'OPEN_APP', qApp})
        }).catch((err) => console.log(err))
    }
}


export function getSheets () {
	//const appid= encodeURIComponent(_app_id)
	//console.log(`${url}app/${appid}/sheets`)
   return (dispatch) => {
        axios.get(`${url}app/current/sheets`)
        .then((res) => {
            let qSheets = res.data.msg
            dispatch({type: 'GET_SHEETS', qSheets})
        }).catch((err) => console.log(err))
    }
}

export function getDimensions () {
	//const appid= encodeURIComponent(_app_id)
	//console.log(`${url}app/${appid}/sheets`)
   return (dispatch) => {
        axios.get(`${url}app/current/dimensions`)
        .then((res) => {
            let qMasterDimensions = res.data.msg
            dispatch({type: 'GET_DIMENSIONS', qMasterDimensions})
        }).catch((err) => console.log(err))
    }
}

export function getMeasures () {
	//const appid= encodeURIComponent(_app_id)
	//console.log(`${url}app/${appid}/sheets`)
   return (dispatch) => {
        axios.get(`${url}app/current/measures`)
        .then((res) => {
            let qMasterMeasures = res.data.msg
            dispatch({type: 'GET_MEASURES', qMasterMeasures})
        }).catch((err) => console.log(err))
    }
}


export function getMasterVisualizations () {
	//const appid= encodeURIComponent(_app_id)
	//console.log(`${url}app/${appid}/sheets`)
   return (dispatch) => {
        axios.get(`${url}app/current/master_visualizations`)
        .then((res) => {
            let qMasterVisualizations = res.data.msg
            dispatch({type: 'GET_MASTER_VISUALIZATIONS', qMasterVisualizations})
        }).catch((err) => console.log(err))
    }
}

export function getVariables () {
	//const appid= encodeURIComponent(_app_id)
	//console.log(`${url}app/${appid}/sheets`)
   return (dispatch) => {
        axios.get(`${url}app/current/variables`)
        .then((res) => {
            let qVariables = res.data.msg
            dispatch({type: 'GET_VARIABLES', qVariables})
        }).catch((err) => console.log(err))
    }
}
export function getObjectDetails (_id) {
	const id= encodeURIComponent(_id)
	console.log(`${url}app/current/objectdetails/${id}`)
   return (dispatch) => {
        axios.get(`${url}app/current/objectdetails/${id}`)
        .then((res) => {
            let qObjectDetails = res.data.msg
            dispatch({type: 'GET_OBJECT_DETAILS', qObjectDetails})
        }).catch((err) => console.log(err))
    }
}

export function getMeasureDetails (_id) {
	const id= encodeURIComponent(_id)
	console.log(`${url}app/current/measuredetails/${id}`)
   return (dispatch) => {
        axios.get(`${url}app/current/measuredetails/${id}`)
        .then((res) => {
            let qMeasureDetails = res.data.msg
            dispatch({type: 'GET_OBJECT_DETAILS', qMeasureDetails})
        }).catch((err) => console.log(err))
    }
}
