import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
          >
            Rajeev Shivah
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 "
            exact
            activeClassName="text-red-100 bg-red-700"
          >
            BLog Post
          </NavLink>
          <NavLink
            to="project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 "
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 "
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/raajeev_94"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/rajeevshivah/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/raajeev94"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
