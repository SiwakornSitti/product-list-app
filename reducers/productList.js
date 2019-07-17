// ลองใช้ Immer เพื่อทำให้ State มันกลายเป็น Immutable
// เวลาเก็บข้อมูลที่ซับซ้อน จะได้ไม่มีปัญหาภายหลัง
// https://github.com/immerjs/immer

import { FETCH_PRODUCTS_SUCCESS } from '../actions/'

const productListReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.data
        default:
            return state
    }
}
export default productListReducer
