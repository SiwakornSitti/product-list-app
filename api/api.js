import axios from 'axios'

const api = axios.create({
    baseURL: 'https://68adda0f-b2f3-446b-b72c-45e5823ef4e0.mock.pstmn.io/api',
});

// ปกติมันน่าจะตั้งว่า /products ควรใช้ Const แทนด้วย
// พอผมเห็นเขียนมาแบบนี้ผมจะเริ่มไม่ไว้ใจละว่าตอนแก้ผมแก้หมดจริงเปล่า
// https://restfulapi.net/resource-naming/

export const getProducts = () => {
   return api.get('/product/')
}

// อาจจะเขียนเป็นแบบนี้
// export const getProduct = (id) = api.get(`/product/${id}`
// แต่บางคนเขาบอกว่าแบบพี่มันอ่านแล้วง่ายกว่า

export const getProduct = (id) => {
   return api.get('/product/'+id)
} 
export const updateProductData = (id, data) => {
    // PUT METHOD Should work properly if you have API
    // อันนี้ควรตัวผมชอบใช้ Template Literal มากกว่า ผมว่ามันอ่านเป็นธรรมชาติกว่า
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   return api.put('/product/'+id, data, {headers: {'Content-Type': 'application/json'}})
}
