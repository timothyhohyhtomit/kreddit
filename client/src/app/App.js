import React, { useCallback, useEffect, useReducer, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import PostPage from "../page/post/PostPage";
import CreatePostPage from "../page/post/CreatePostPage";

function App() {
    // STATES
    // user info
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("user_id") !== null);
    // react router
    const appRouter = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<></>}>
            <Route index element={
                <></>
            } />
            <Route path="post">
                <Route path=":postId" element={
                    <PostPage
                        isLoggedIn={false}
                        user={null}
                    />
                } />
                <Route path="create" element={
                    <CreatePostPage
                        isLoggedIn={false}
                        user={null}
                    />
                } />
            </Route>
        </Route>
    ));
    return <RouterProvider router={appRouter} />
}