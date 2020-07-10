const { combineReducers, createStore } = require("redux");
const { default: localeReducer } = require("./reducer");

const reducers = combineReducers({ locale: localeReducer });

const initialState = {
    locale: localStorage.getItem('selected_locale') ? localStorage.getItem('selected_locale') : 'en_IN'
};

const store = createStore(reducers,
    initialState, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;