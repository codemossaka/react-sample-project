import {
    createBrowserRouter, Route,
    RouterProvider,
} from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Home from "../pages/admin/Home";
import Testimony from "../pages/admin/Testimony";
import Journal from "../pages/admin/Journal";
import Audio from "../pages/admin/Audio";
import Video from "../pages/admin/Video";
import Stream from "../pages/admin/Stream";
import Worship from "../pages/admin/Worship";
import User from "../pages/admin/User";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/testimony",
                element: <Testimony/>,
            },
            {
                path: "/journal",
                element: <Journal/>,
            },
            {
                path: "/audio",
                element: <Audio/>,
            },
            {
                path: "/video",
                element: <Video/>,
            },
            {
                path: "/stream",
                element: <Stream/>,
            },
            {
                path: "/worship",
                element: <Worship/>,
            },
            {
                path: "/users",
                element: <User/>,
            },
        ],
    },
]);