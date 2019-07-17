import { ProductImg } from '../styled-css/product'

// 1 File ควรมีแค่ Component เดียวนะ
// อันนี้มันควรเป็น ImageList รึเปล่าเพราะสุดท้ายมันคือ Render image หลาย ๆ Elements

const Image = ({ images }) => {
    // ควรแสดงข้อความอะไรสักอย่างให้ User เห็นว่า ไม่มีรูปภาพประกอบ
    if (!images) return (<div/>)
    return (
                         
        // อย่าใช้ Index ในการแก้ไขปัญหา Key มันทำให้การเปรียบเทียบ Virtual DOM มีปัญหา
        // https://reactjs.org/docs/lists-and-keys.html
        // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
        images.map((image, i) => {
            return (
                <div key={i}>
                    <ProductImg src={image.url} alt={image.name}/>
                    <span>{image.name}</span>
                </div>
            )
        })
    )
}

const ProductDetail = ({ product }) => {
    if (!product) return (<div/>)
    return (
        // ใช้ Fragment แทน        
        <div>
            <h1>{product.name}</h1>
            <span>{product.number}</span>
            <p>{product.description}</p>
            <div>
                <Image images={product.images}></Image>
            </div>
        </div>
    )
}

export default ProductDetail
