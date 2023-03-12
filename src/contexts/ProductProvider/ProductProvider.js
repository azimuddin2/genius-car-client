import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../../state/ProductState/actionTypes';
import { initialState, productReducer } from '../../state/ProductState/productReducer';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START });

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>
                dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
            ).catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR });
            })
    }, [])

    const productsData = {
        state,
        dispatch
    };

    return (
        <ProductContext.Provider value={productsData}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    return context;
};

export default ProductProvider;