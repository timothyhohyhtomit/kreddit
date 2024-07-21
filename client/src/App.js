import React, { useCallback, useEffect, useReducer, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";

function App() {
    // STATES
    // user info
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("user_id") !== null);
}