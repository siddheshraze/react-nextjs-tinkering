"use client"
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navitem";

const SITE_LIST = [
  { text: "Browse", href: "/browse" },
  { text: "Reports", href: "/reports" },
  { text: "Upload", href: "/upload" },
  { text: "Validate", href: "/validate" },
];

const NavBar = () => {
  const [navActive, setNavActive] = useState(Boolean);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <h3>Home Page</h3>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {SITE_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
