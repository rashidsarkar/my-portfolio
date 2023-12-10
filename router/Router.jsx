import { createBrowserRouter } from "react-router-dom";
import MainLayaout from "../src/MainLayaout/MainLayaout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayaout />,
  },
]);

export default router;
