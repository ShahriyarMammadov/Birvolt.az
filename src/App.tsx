import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes";
import "aos/dist/aos.css";

function App() {
  const router = createBrowserRouter(ROUTES);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
