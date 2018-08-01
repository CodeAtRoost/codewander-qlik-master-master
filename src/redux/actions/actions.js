// src/redux/actions/actions.js
/** */
import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://192.168.1.6:5000/api/"
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

