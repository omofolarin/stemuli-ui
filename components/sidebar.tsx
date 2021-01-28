import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import {
  Home as HomeIcon,
  Analytics as AnalyticsIcon,
  Messages as MessagesIcon,
  Bookmarks as BookmarksIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Notifications as NotificationIcon,
  DropdownMore as DropdownMoreIcon,
} from "./icons";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="10" fill="url(#paint0_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.85 25.0229C20.85 25.765 21.8124 26.0564 22.224 25.4389L27.6726 17.266C28.0049 16.7676 27.6476 16.1 27.0486 16.1H22.75V10.9771C22.75 10.235 21.7875 9.94363 21.3759 10.5611L15.9273 18.734C15.595 19.2324 15.9523 19.9 16.5514 19.9H20.85V25.0229Z"
          fill="white"
        />
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.44999 12.775C9.44999 11.988 10.088 11.35 10.875 11.35H15.625C16.412 11.35 17.05 11.988 17.05 12.775C17.05 13.562 16.412 14.2 15.625 14.2H10.875C10.088 14.2 9.44999 13.562 9.44999 12.775ZM9.44999 24.175C9.44999 23.388 10.088 22.75 10.875 22.75H15.625C16.412 22.75 17.05 23.388 17.05 24.175C17.05 24.962 16.412 25.6 15.625 25.6H10.875C10.088 25.6 9.44999 24.962 9.44999 24.175ZM8.97499 17.05C8.18798 17.05 7.54999 17.688 7.54999 18.475C7.54999 19.262 8.18798 19.9 8.97499 19.9H12.775C13.562 19.9 14.2 19.262 14.2 18.475C14.2 17.688 13.562 17.05 12.775 17.05H8.97499Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="36"
            y1="0"
            x2="0"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BB65FF" />
            <stop offset="1" stopColor="#4C6FFF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const styles = createUseStyles({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    padding: "22px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logo: {
    width: "auto",
  },

  mainNav: {
    marginBottom: "1em",
  },

  secondaryNav: {
    borderTop: `1px solid ${theme.outlineColor}`,
    margin: "1em 0",
  },

  navItem: {
    padding: "16px",
    cursor: "pointer",
  },

  footer: {
    width: "100%",
  },

  AvatarItem: {
    display: "flex",
    padding: "4px",
  },
  footerAvatar: {
    width: "2em",
    height: "2em",
    backgroundColor: theme.backgroundColor,
    margin: "auto",
    borderRadius: "4px",
  },
});

interface SidebarProps {
  mode: "minimize" | "expanded";
}

const routes = {
  primary: [
    { title: "Dashboard", url: "/dashboard", icon: <HomeIcon /> },
    { title: "Analytics", url: "/analytics", icon: <AnalyticsIcon /> },
    { title: "Messages", url: "/messages", icon: <MessagesIcon /> },
    { title: "Help", url: "/help", icon: <BookmarksIcon /> },
    { title: "Students", url: "/students", icon: <PeopleIcon /> },
  ],
  secondary: [
    { title: "Settings", url: "/settings", icon: <SettingsIcon /> },
    {
      title: "Notifications",
      url: "/notifications",
      icon: <NotificationIcon />,
    },
  ],
};

export default function Sidebar(props: SidebarProps) {
  const classes = styles();
  const mode = "minimize";
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.mainNav}>
        {routes.primary.map((item, i) => {
          return (
            <div key={i.toString()}>
              <div className={classes.navItem}>{item.icon}</div>
            </div>
          );
        })}
      </div>
      <div className={classes.secondaryNav}>
        {routes.secondary.map((item, i) => {
          return (
            <Link key={i.toString()} href={item.url}>
              <div className={classes.navItem}>{item.icon}</div>
            </Link>
          );
        })}
      </div>
      <div className={classes.footer}>
        <div className={classes.AvatarItem}>
          <div className={classes.footerAvatar}>
            <img src={"/"} alt="icon" />
          </div>
          <div>
            <DropdownMoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
