import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {landing} from "../../constants/_navItems";

export default function Menu({
  show = false,
  onHide = () => {},
  signInPath = "",
}) {
  const sidebar = useRef();
  const location = useLocation();
  const handleShow = () => {
    sidebar.current.classList.toggle("active", show);
  };
  const handleLocation = () => {
    onHide(false);
  };
  useEffect(handleShow, [show]);
  useEffect(handleLocation, [location.pathname]);
  return (
    <div
      ref={sidebar}
      className={`sidebar-toggle flex lg:hidden  fixed top-0 left-0 w-full h-full overflow-hidden`}
    >
      
      <div className={`menu transition-transform  ${show ? "translate-x-0" : "translate-x-full	"} bg-blue-500 bg-opacity-90  flex flex-col  items-center justify-center gap-3 h-full`}>
        {landing.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `text-${isActive ? "white" : "gray-200"} w-100 text-start py-3 px-2`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <li>
          <Link to={signInPath} className="Button btn text-primary d-lg-none">
            پروفایل من
          </Link>
        </li>
      </div>
      <button
        className="hide-btn flex-1 opacity-0"
        onClick={() => onHide(false)}
      ></button>
    </div>
  );
}