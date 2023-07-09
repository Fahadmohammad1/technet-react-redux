import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/products/productSlice'
import { api } from './api/apiSlice';
import userReducer from './features/user/userSlice'

const store = configureStore({
    reducer : {
        cart : cartReducer,
        user : userReducer,
        product : productReducer,
        [api.reducerPath] : api.reducer,
    },
    middleware : (getDefauldMiddleware) => getDefauldMiddleware().concat(api.middleware) 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store