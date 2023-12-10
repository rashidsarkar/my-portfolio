import { createBrowserRouter } from "react-router-dom";
import MainLayaout from "../src/MainLayaout/MainLayaout";
import Home from "../src/Pages/Home/Home";
import MySkills from "../src/Pages/MySkills/MySkills";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayaout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "skills",
        element: <MySkills />,
      },
    ],
  },
]);

export default router;
