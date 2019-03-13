// src/redux/reducers/common.js
const defaultState = {
appName: '',
modalMode: false,
server_url: "http://localhost:5000/api/"
};
export default (state = defaultState, action) => {
switch (action.type) {
case 'TOGGLE_MODAL':
return {
...defaultState,
modalMode: action.modalMode
}
default:
return state;
}
};