import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./index.css";
import { admin } from "../../constants/_navItems";
import { RxHamburgerMenu } from "react-icons/rx";

export default function AdminPanel() {
  const sidebar = useRef();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleChangeShow = () => {
    sidebar.current.classList.toggle("active", show);
  };
  const handleChangeLocation = () => {
    setShow(false);
  };


  useEffect(handleChangeLocation, [location.pathname]);
  useEffect(handleChangeShow, [show]);
  return (
    <div className="AdminPanel relative items-start grid grid-cols-12 gap-2">
      <div
        ref={sidebar}
        
        className="sidebar col-span-2 flex p-0"
      >
        <div className="sidebar-content relative bg-white shadow-2xl rounded-lg ">
          {/* <img className="bg-img opacity-2" src={bgSliderImg} alt="bg slider" /> */}
          <div className="h-screen overflow-auto px-2 py-2 text-white">
            <div
              style={{ pointerEvents: "none" }}
              className="text-center font-bold"
            >
              <h3 className="text-blue-500">Admin Panel</h3>
            </div>
            {admin.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="w-full text-black shadow  my-2 flex items-center rounded-lg text-truncate"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <button
          className="hide-btn flex-1 block lg:hidden opacity-0"
          onClick={() => setShow(false)}
        />
      </div>
      <div className="px-0 col-span-12 lg:col-span-10 relative">
        <header className="sticky top-0 left-0 flex items-center bg-white  w-full p-2">
          <button
            className="bg-transparent border-0 fs-2 block lg:hidden"
            onClick={() => setShow(true)}
          ><RxHamburgerMenu/></button>
          
        </header>
        <div className="my-3 py-3 px-2 bg-white rounded-lg shadow w-full">
          <Outlet />
        </div>
      </div>
      {/* <button className="setting-btn btn btn-primary rounded-circle p-0 position-fixed">
        <i className="bi bi-gear fs-4 d-flex flex-center animation-spin" />
      </button> */}
    </div>
  );
}