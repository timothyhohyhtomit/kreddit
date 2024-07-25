import express from "express";
// database
// import { query } from "../../db/util.js";
// token authentication middleware


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
postRouter.get("/:postId", authenticateToken, async (req, res) => {
    // extract user_id, post_id and author_id
    const userId = req.user.id;
    const postId = parseInt(req.params.postId);
    if (isNaN(postId)) res.status(404).json({
        error: "Post (id=" + postId + ") does not exist."
    });
    // request post details
    return getPost(postId);
});