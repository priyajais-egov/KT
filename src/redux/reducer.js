const { ADD_SELECTED_LANGUAGE, FETCH_LANGUAGES, ADD_LANGUAGES } = require("./action");

const localeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_SELECTED_LANGUAGE:
            return payload;
        default:
            return state;
    }
};

export const languageReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_LANGUAGES:
            return payload;
        default:
            return state;
    }
};

export default localeReducer;