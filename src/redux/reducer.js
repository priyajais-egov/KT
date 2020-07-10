const { ADD_SELECTED_LANGUAGE } = require("./action");

const localeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_SELECTED_LANGUAGE:
            return payload;
        default:
            return state;
    }
};

export default localeReducer;