import { FETCH_PRODUCTS_SUCCESS } from '../actions/'
export const productListReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.data
        default:
            return state
    }
}
export default productListReducer