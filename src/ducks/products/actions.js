import {createAction} from 'redux-actions';
// import {startLoading, stopLoading} from "../preLoad/actions";
export const getProducts = createAction('getProducts');
// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
//
//
// export const fetchProducts = createAsyncThunk(
//     'product/fetchProducts',
//     async function () {
//         const response = await fetch('https://modnikky-api.herokuapp.com/api/catalog/');
//
//         const data = await response.json();
//         return data
//     }
// );

// const productSlice = createSlice({
//     initialState:{
//         status: null,
//         error: null,
//     },
//     extraReducers: {
//         [fetchProducts.pending]: (state) => {
//             state.status = 'laoding';
//             state.error = null;
//         },
//         [fetchProducts.fulfilled] : (state, action) => {
//             state.status = 'resolved';
//             state.product = action.payload
//         },
//         [fetchProducts.rejected] : (state, action) => {},
//     },
// });

// export const getProduct = (action) => {
//     return async dispatch => {
//         dispatch(startLoading())
//         const response = await fetch(`https://modnikky-api.herokuapp.com/api/catalog/`);
//         const jsonData = await response.json();
//         dispatch(stopLoading())
//         dispatch(action(jsonData));
//     };
// };

