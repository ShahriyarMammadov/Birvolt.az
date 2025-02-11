import HomePage from "../pages/home";
import MainRoot from "./mainRoot";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];

export default ROUTES;
