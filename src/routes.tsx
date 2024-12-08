import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import TvSeries from "./pages/tv-series";
import Movie from "./pages/movie";
import Bookmark from "./pages/bookmark";
import Error from "./pages/error";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        errorElement: <Error/>,
    },
    {
        path: "/home",  
        element: <Home />,
        errorElement: <Error />,
      },
    {
        path:"/movies",
        element: <Movie/>,
        errorElement: <Error/>,
    },
    {
        path:"/tv-series",
        element: <TvSeries/>,
        errorElement: <Error/>,
    },
    {
        path:"/bookmarks",
        element: <Bookmark/>,
        errorElement: <Error/>,
    }
], { basename: "/cinecraft" })