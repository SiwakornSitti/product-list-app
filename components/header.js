// เปลี่ยนจาก Div ไปใช้ Fragment แทน
// https://reactjs.org/docs/fragments.html

import { Link } from '../routes';

const Header = () => (
    <div>
        <Link to="/">
            <a>Index Page</a>
        </Link>
    </div>
);

export default Header;
