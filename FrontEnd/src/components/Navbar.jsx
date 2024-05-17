import { useState } from "react";
import { UserIcon } from "./icons/user-icon";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import { CartIcon } from "./icons/cart-icon";
import img1 from "../assets/img/1.2-removebg-preview.png";

export const Navbar = ({ onSearch }) => {
  const isSearchVisible =
    location.pathname === "/home" ||
    location.pathname === "/";

  const isUserProfileInvisible = location.pathname != "/userProfile";
  const isCartInvisible = location.pathname != "/cart";

  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="bg-[#265073] w-full h-20 flex items-center justify-center">
      <div className="w-[90%] flex justify-between items-center">
        <div className="rounded-full bg-white m-2 p-2">
          <Link to={`/home`}>
            <img src={img1} className="size-10" alt="Logo" />
          </Link>
        </div>
        {isSearchVisible && (
          <div>
            <input
              className="rounded h-8  w-72 p-2"
              type="search"
              placeholder="Buscar"
              onChange={handleSearch}
            />
          </div>
        )}
        <div className="mr-4 flex gap-5 items-center text-white/95 font-semibold">
          {isUserProfileInvisible && (
            <div className="bg-gray-50 p-2 rounded-full">
              <Link to={`/userProfile`}>
                <UserIcon className="fill-[#EFF1F999] stroke-black " />
              </Link>
            </div>
          )}

          {isCartInvisible && (
            <div>
              <Link to={`/cart`}>
                <CartIcon className="size-9" />
              </Link>
            </div>
          )}

          <Link to={`/login`}>
            <button className="bg-white text-black rounded p-2">
              Iniciar Sesion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
