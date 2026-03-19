import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Reserve } from "./components/Reserve";
import { MyReservations } from "./components/MyReservations";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "reserve/:restaurantId", Component: Reserve },
      { path: "my-reservations", Component: MyReservations },
    ],
  },
]);
