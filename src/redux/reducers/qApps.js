// src/redux/reducers/qApps.js
const initialState = {
    qApps: [],
    qApp: null,
	qSheets: [],
	qMasterMeasures:[],
	qMasterDimensions: [],
	qMasterVisualizations: [],
	qVariables:[],
	qDisplayObject:{qObjectId: null},
	qObjectDetails:[]
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
		case 'GET_SHEETS':
		return{
            ...state,
            qSheets: action.qSheets				
		}
		case 'GET_DIMENSIONS':
		return{
            ...state,
            qMasterDimensions: action.qMasterDimensions				
		}
		case 'GET_MEASURES':
		return{
            ...state,
            qMasterMeasures: action.qMasterMeasures				
		}
		case 'GET_MASTER_VISUALIZATIONS':
		return{
            ...state,
            qMasterVisualizations: action.qMasterVisualizations				
		}
		case 'GET_VARIABLES':
		return{
            ...state,
            qVariables: action.qVariables				
		}		
        default:
            return state
    }
}
