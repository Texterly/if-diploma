import {handleActions} from 'redux-actions'
import {startLoading, stopLoading} from "./actions";

export const initialState = false

const loadReducer = {
    // eslint-disable-next-line no-unused-vars
    [startLoading]: (state = initialState) => true,
    // eslint-disable-next-line no-unused-vars
    [stopLoading]: (state = initialState) => false,
}

export default handleActions(loadReducer, initialState)