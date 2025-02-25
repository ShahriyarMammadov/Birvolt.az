import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes";
import "aos/dist/aos.css";

function App() {
  const router = createBrowserRouter(ROUTES);

  document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});


  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
