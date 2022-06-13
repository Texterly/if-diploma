import {getProducts} from "./actions";
import {handleActions} from "redux-actions";

export const initialState =[];

const productReducer = {
    // eslint-disable-next-line no-unused-vars
    [getProducts]: (state = initialState, action) => action.payload.filter(i => i.type === 'id')
}
export default handleActions(productReducer, initialState)