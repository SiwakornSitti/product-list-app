import Header from '../components/header';

// มี Styled Components ใน Project แล้ว ผมว่าเรียกมันมาใช้แทน LayoutStyle ดีกว่า
// const LayoutContainer = styled.div``
// ผมชอบกรุ๊ปให้เป็น Folder มากกว่าเช่น
// Components
// |_Layout
//    |_ index.js
//    |_ container.js 
// จะได้แยก Styled ออก
// ปกติพวก Header ควรมาใช้แบบนี้มากกว่านะ 
// https://nextjs.org/docs#custom-app

const LayoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
const Layout = props => (
  <div style={LayoutStyle}>
    <Header></Header>
    {props.children}
  </div>
);

export default Layout;
