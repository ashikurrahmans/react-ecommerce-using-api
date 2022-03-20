import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = (props) => {
  return (
    <div className="menu-bg">
      <div className="container">
        <div className="row pad">
          <div className="col-md-2">Logo</div>
          <div className="col-md-10 menu-container">
            <li>Home</li>
            <li>About</li>
            <li>
              Cart<sup>{props.count}</sup>
            </li>
            <li>LogIn</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
