// src/redux/reducers/qApps.js
const initialState = {
    qApps: [],
    qApp: null
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'GET_APPS' :
        return {
            ...state,
            qApps: action.qApps
        }
        case 'OPEN_APP':
        return {
            ...state,
            qApp: action.qApp
        }        
        default:
            return state
    }
}
