import { Button } from 'antd'
import React, { useState } from 'react'
import { landing } from '../../constants/_navItems'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import rolesPath from '../../constants/_rolePath'
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from './Menu'
import CartCount from './CartCount'

const Headers = () => {
  const [show, setShow] = useState(false)
  const role = useSelector((s) => s.role);
  const isLogged = useSelector((s) => s.isLogged);
  const signInPath = rolesPath[role] ?? "/auth/signin";

  return (
    <header className="shadow">
      <div className="container flex items-center justify-between py-4">
        <p>عکاس باشی</p>
        <div className="flex items-center">
          {isLogged && <Link to="/cart"><CartCount /></Link>}
          <Button className='hidden lg:block' type="link" href={signInPath}> {isLogged ? "پروفایل من" : "ورود / ثبت نام"} </Button>
          <button onClick={() => { { setShow(true); console.log("aa") } }} className="border-0 outline-0 z-10 lg:hidden"><RxHamburgerMenu /></button>
        </div>

      </div>
      <div className="w-full hidden lg:flex items-center justify-center">
        {landing.map(e =>
          <NavLink key={e.path} to={e.path} className={({ isActive }) =>
            isActive ? "border-b border-blue-400 text-md text-primary mx-2 font-medium p-1 " : "text-md mx-2 font-medium p-1"
          }>
            <p>
              {e.label}
            </p>
          </NavLink>)}

      </div>
      <Menu signInPath={signInPath} show={show} onHide={setShow} />

    </header>
  )
}

export default Headers