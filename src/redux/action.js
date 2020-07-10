export const ADD_SELECTED_LANGUAGE = "SELECTED LOCALE [Language Selected]";

function addLocale(payload) {
    return {
        type: ADD_SELECTED_LANGUAGE,
        payload
    };
}

export default addLocale;