import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const { combineReducers, createStore, applyMiddleware, compose } = require("redux");
const { default: localeReducer, languageReducer } = require("./reducer");

const reducers = combineReducers({
    locale: localeReducer,
    languages: languageReducer
});

const initialState = {
    locale: localStorage.getItem('selected_locale') ? localStorage.getItem('selected_locale') : 'en_IN',
    languages: []
};

const store = createStore(reducers,
    initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;