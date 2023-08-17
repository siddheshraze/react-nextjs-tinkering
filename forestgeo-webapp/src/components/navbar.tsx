"use client";
import Link from "next/link";
import { Link as MLink } from "@mui/material";
import React, { useState } from "react";
import NavItem from "./navitem";
import GetUser, { clientPrincipal } from "./getuser";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { SelectPlotProps } from "./selectplot";

const SITE_LIST = [
  { text: "Home", href: "/" },
  { text: "Browse", href: "/browse" },
  { text: "Reports", href: "/reports" },
  { text: "Validate", href: "/validate" },
];

export interface NavBarProps {
  userDetails?: string;
  plotProps?: SelectPlotProps;
}

export default function NavBarPopulated() {
  const user: clientPrincipal | undefined = GetUser();
  return <NavBar userDetails={user?.userDetails} />;
}

export function NavBar({ userDetails }: NavBarProps) {
  const [navActive, setNavActive] = useState(Boolean);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
          <div>
            <Link href={"/"}>
              <h3>Home Page</h3>
            </Link>
            <p>
              Currently viewing:{" "}
              {activeIdx >= 0 ? SITE_LIST.at(activeIdx)?.text : "Home Page"}
            </p>
          </div>
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
            {userDetails ? (
              <>
                <Typography
                  aria-label="menu"
                  sx={{ color: "white", ml: "auto", mr: "10px" }}
                >
                  {userDetails}
                </Typography>
                <MLink
                  sx={{ textDecoration: "underline", color: "white" }}
                >
                  <Link href="/logout">Logout</Link>
                </MLink>
              </>
            ) : (
              <p></p>
            )}
            <IconButton size="large" color="inherit" aria-label="menu">
              <AccountCircle />
            </IconButton>
          </div>
      </nav>
    </header>
  );
}
