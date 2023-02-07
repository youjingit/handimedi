import classNames from "classnames";
import { FaHome, FaClock, FaImage, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const menus = [
  {
    id: "home",
    src: "/home",
    icon: <FaHome style={{ width: "28px" }} />,
  },
  {
    id: "alarm",
    src: "/alarm/list",
    icon: <FaClock />,
  },
  {
    id: "photo",
    src: "/photo",
    icon: <FaImage />,
  },
  {
    id: "setting",
    src: "/setting",
    icon: <FaCog />,
  },
];

function BottomNav({ activeMenu }) {
  return (
    <ul className="bottom_nav">
      {menus.map((menu) => {
        return (
          <li
            key={menu.id}
            className={classNames("bottom_nav_item", {
              active: activeMenu === menu.id,
            })}
          >
            <Link to={`${menu.src}`} className="bottom_nav_link">
              <i className="bottom_nav_icon">{menu.icon}</i>
              <span className="bottom_nav_text">{menu.id}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BottomNav;
