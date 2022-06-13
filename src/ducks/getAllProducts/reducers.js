import {
    getAllDresses,
    getAllBeauty,
    getAllTees,
    getAllSwimwear,
    getAllDenim,
    getAllTops,
    getAllProducts
} from "./actions";
import {handleActions} from 'redux-actions';


const initialState = []

const goodReducer = {
    // eslint-disable-next-line no-unused-vars
    [getAllProducts] : (state = initialState, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    [getAllDresses] : (state = initialState, action) => action.payload.filter(i => i.type === 'Dresses'),
    // eslint-disable-next-line no-unused-vars
    [getAllTees] : (state = initialState, action) => action.payload.filter(i => i.type === 'Tees'),
    // eslint-disable-next-line no-unused-vars
    [getAllSwimwear] : (state = initialState, action) => action.payload.filter(i => i.type === 'Swimwear'),
    // eslint-disable-next-line no-unused-vars
    [getAllDenim] : (state = initialState, action) => action.payload.filter(i => i.type === 'Denim'),
    // eslint-disable-next-line no-unused-vars
    [getAllTops] : (state = initialState, action) => action.payload.filter(i => i.type === 'Tops'),
    // eslint-disable-next-line no-unused-vars
    [getAllBeauty] : (state = initialState, action) => action.payload.filter(i => i.type === 'Beauty'),
}

export default handleActions(goodReducer, initialState)