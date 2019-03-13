// src/redux/reducers/qApps.js
const initialState = {
    qCurrentMeasureId:'',
	qObjectDetails:[]
}
export default (state=initialState, action) => {
    switch (action.type) {
		case 'GET_OBJECT_DETAILS':
		return{
            ...state,
            qMeasureDetails: action.qMeasureDetails				
		}
        default:
            return state
    }
}
