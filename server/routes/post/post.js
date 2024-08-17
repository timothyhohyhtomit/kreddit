import express from "express";
import { authenticateTokenL1, authenticateTokenL2 } from "../../middleware/middleware.js";
import { validateTitle, validateContent, getPost, addPost } from "./postUtil.js";
// database
// import { query } from "../../db/util.js";
// token authentication middleware

// image storage
import multer from "multer";
import path from "path";
import url from "url";
import fs from "fs";
import { sanitiseString } from "../../db/util.js";


const postRouter = express.Router();
postRouter.use(express.json());

// configure Multer storage
const storage = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
// initialize Multer upload middleware
const upload = multer({ storage });
// serve uploaded files
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
postRouter.use("./images", express.static(path.join(__dirname, "images")));

// ====== API endpoints ======

/* Post Fetching
- Input: user_id, author_id, post_id
- Output: {
    post_id,
    author_id,
    author_username,
    author_avatar_url,
    title,
    content,
    imageUrl,
    likeCount,
    commentCount
}
*/
postRouter.get("/:postId", authenticateTokenL1, async (req, res) => {
    // check if postId is a valid integer
    const postId = parseInt(req.params.postId);
    if (isNaN(postId)) res.status(404).json({
        error: "Post id (" + postId + ") is invalid."
    });
    // extract user_id, post_id and author_id
    try {
        //const userId = req.user.id;
        // request post details
        const post = await getPost(postId);
        res.status(200).json({
            post
        });
    } catch (err) {
        res.status(404).json({
            error: err.message
        });
    }
});

/* Post Creation
Input:
- user_id: int
- post: object
Output:
*/
postRouter.post("/create", authenticateTokenL1, async (req, res) => {
    // extract user_id
    // extract title and content
    // create a new post on database and return post_id
    try {
        const ownerId = 1;//req.user.id;
        const { title, content } = req.body;
        validateTitle(title);
        validateContent(content);
        console.log(`sanitised string: ${sanitiseString(content)}`);
        const postId = await addPost(ownerId, {
            title,
            content: sanitiseString(content)
        });
        res.status(201).json({
            postId
        });
        return;
    } catch (err) {
        res.status(500).json({
            error: "Could not create a post: " + err.message
        });
    }
});

export default postRouter;
