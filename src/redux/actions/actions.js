// src/redux/actions/actions.js
/** */
import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"
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
   return (dispatch) => {
        axios.get(`${url}app/${_id}`)
        .then((res) => {
            let qApp = res.data
            dispatch({type: 'OPEN_APP', qApp})
        }).catch((err) => console.log(err))
    }
}
