import { combineReducers } from 'redux';
import qApps from './reducers/qApps';
import common from './reducers/common';
import qMeasures from './reducers/qMeasures';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  qApps,
  common,
  qMeasures,
  router: routerReducer
});