import { createBrowserRouter } from "react-router";
import RootsLayout from "../layouts/RootsLayout";
import HomePage from "../pages/homePage/HomePage";
import Timeline from "../pages/timelinePage/Timeline";
import State from "../pages/statePage/State";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <RootsLayout></RootsLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,                
            },
            {
                path: '/timeline',
                element: <Timeline></Timeline>
            },
            {
                path: '/state',
                element: <State></State>
            },

        ]
    }

]);