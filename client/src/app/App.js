import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PostPage from "../page/post/PostPage";
import CreatePostPage from "../page/post/CreatePostPage";
import HomePage from "../page/general/MainPage";
import Root from "../view/general/Root";
import SearchResultPage from "../page/general/SearchResultPage";
import Sandbox from "../page/general/Sandbox";
import SudokuPage from "../page/general/SudokuPage";

function App() {
    // STATES
    // user info
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("user_id") !== null);
    const [user, setUser] = useState(null);
    // react router
    const appRouter = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root isLoggedIn={isLoggedIn} user={user} />}>
            <Route index element={
                <HomePage />
            } />
            {/* Testing plotly */}
            <Route path="sandbox" element={
                <Sandbox />
            } />
            {/* Testing sudoku */}
            <Route path="sudoku" element={
                <SudokuPage />
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
            <Route path="search">
                <Route path=":query" element={
                    <SearchResultPage />
                } />
            </Route>
        </Route>
    ));
    return <RouterProvider router={appRouter} />;
}

export default App;
