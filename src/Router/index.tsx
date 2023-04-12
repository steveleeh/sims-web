import { createBrowserRouter } from "react-router-dom";
import ClanPage from "../Page/ClanPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ClanPage></ClanPage>,
  },
]);
