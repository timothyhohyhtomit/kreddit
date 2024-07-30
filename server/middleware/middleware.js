import "dotenv/config";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../configuration.js";

/* Authorizatiion Level
Level 1: Authentication is not required.
Level 2: Authentication is required, but any authenticated user is authorised.
Level 3: Authentication is required, and only selected user group is authorised.
*/

/*
Access Token Authentication takes in the authorisation header of a request, verifies that the access token is valid (has not been tampered with and is not expired). If this is true, the request has passed and moves on to the next step.
- If an access token is not provided, return a null user object.
- If the access token is invalid, a 401 (Authorised) status code should be returned.
*/
export const authenticateTokenL1 = (req, res, next) => {
    const authHeader = req.headers["authoriization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!authHeader || !token) {  // authorization header missing or access token missing
        req.user = null;
        next();
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        // access token has been tampered with
        if (err) {
            res.status(401).json({
                error: "Access token has been tampered with"
            });
            return;
        }
        req.user = user;
        next();
    });
};

export const authenticateTokenL2 = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    // authorization header missing or access token missing
    if (!token) {
        res.status(401).json({
            error: "Authorisation header or access token is missing"
        });
        return;
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        // access token has been tampered with
        if (err) {
            res.status(401).json({
                error: "Access token has been tampered with"
            });
            return;
        }
        req.user = user;
        next();
    });
};
/*
export const authenticateTokenL3 = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    // authorization header missing or access token missing
    if (!token) {
        res.status(401).json({
            error: "Authorisation header or access token is missing"
        });
        return;
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        // access token has been tampered with
        if (err) {
            res.status(401).json({
                error: "Access token has been tampered with"
            });
            return;
        }
        req.user = user;
        next();
    });
};
*/
