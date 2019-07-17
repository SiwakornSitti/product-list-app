// ผมว่าการเปิดปิด Modal มันไม่ควรเอามา Handle ใน Redux นะ
// ปกติผม Handle ด้วย State มากกว่า ถ้ากาเปิดปิด Modal มันไม่ได้ไปแชร์กับคร

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = (modalIsOpen) => dispatch => {
    dispatch({ type: OPEN_MODAL, modalIsOpen })
}

export const closeModal = (modalIsOpen) => dispatch => {
    dispatch({ type: CLOSE_MODAL, modalIsOpen })
}
