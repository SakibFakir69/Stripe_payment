import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function Navbar() {

  // useauth
  const {user ,logoutfromNav,setloading,setuser} = useAuth();


  const hadnelLogOut = ()=>{
    setloading(false);

    logoutfromNav()
    .then((result)=>{
      setloading(true);
      setuser(null);

    })
    .catch((error)=>{
      console.log('this error from navbar');

    })
  }






  const links =<>
  <li><NavLink to='/'>Products</NavLink></li>
  <li><NavLink to='/cart'>Carts</NavLink></li>

  </>


  return (
    <div>
      <div className="navbar bg-base-100 border shadow-lg shadow-orange-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Stripe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">


          {/* button condition */}

          {
            user ? (<div>

              <button onClick={hadnelLogOut} className="btn">Log out</button>


            </div>) : 



            (<div>
              <Link to={'/account/signup'}>
              <button className="btn ">Log in</button></Link>
              
               </div>)
          }
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
