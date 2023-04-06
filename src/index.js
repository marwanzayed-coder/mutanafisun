import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dev from "./Pages/Dev";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "../src/Pages/Home";
import Quraan from "../src/Pages/Quraan";
import Top from "../src/Pages/Top";
import Settings from "./Pages/Settings";
import User from "./Pages/User";
import UserInfo from "./Pages/UserInfo";
import Team from "./Pages/Team";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Report from "./Pages/Report";
import Sala from "./Pages/Sala";
import Zakah from "./Pages/Zakah";
import Azkaar from "./Pages/Azkaar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sala",
    element: <Sala />,
  },
  {
    path: "/quran",
    element: <Quraan />,
  },
  {
    path: "/quran/:id",
    element: <Top />,
  },
  {
    path: "/zakah",
    element: <Zakah />,
  },
  {
    path: "/azkaar",
    element: <Azkaar />,
  },
  {
    path: "/heightop",
    element: <Top />,
  },
  {
    path: "/users/:username",
    element: <User />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/setting/userinfo",
    element: <UserInfo />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/user/dev/:username",
    element: <Dev />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
