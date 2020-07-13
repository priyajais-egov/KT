import { MDMS } from "../Components/LanguageSelection";

export const ADD_SELECTED_LANGUAGE = "SELECTED LOCALE [Language]";
export const FETCH_LANGUAGES = "FETCH LANGUAGES [Language]";
export const ADD_LANGUAGES = "ADD LANGUAGES [Language]";

function addLocale(payload) {
    return {
        type: ADD_SELECTED_LANGUAGE,
        payload
    };
}

export function fetchLanguage() {
    return (dispatch) => {
        return MDMS().
            then(response => {
                dispatch(addLanguage(response.data.MdmsRes['common-masters'].StateInfo[0].languages));
            });
    };
}

export function addLanguage(payload) {
    return {
        type: ADD_LANGUAGES,
        payload
    }
}

export default addLocale;