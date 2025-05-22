import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "skills", element: <Skills /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
