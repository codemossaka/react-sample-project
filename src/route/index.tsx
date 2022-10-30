import {
    createBrowserRouter, Route,
    RouterProvider,
} from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Home from "../pages/admin/Home";
import Testimony from "../pages/admin/testimony/Testimony";
import Journal from "../pages/admin/journal/Journal";
import Audio from "../pages/admin/audio/Audio";
import Video from "../pages/admin/video/Video";
import Stream from "../pages/admin/stream/Stream";
import Worship from "../pages/admin/worship/Worship";
import User from "../pages/admin/User";
import React from "react";
import {EditTestimony} from "../pages/admin/testimony/EditTestimony";

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
                path: "/testimony/edit/:id",
                element: <EditTestimony/>,
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