import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <ul>
      <li>
        <Link class="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <a to="/users">User</a>
      </li>
      <li>
        <Link to="/products">Product</Link>
      </li>
    </ul>
  );
};
export default Header;
