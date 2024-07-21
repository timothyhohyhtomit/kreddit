import express from "express";
import cors from "cors";
import postRouter from "./post/post.js";
import userRouter from "./user/user.js";

import multer from "multer";
import path from "path";
import url from "url";
import { authenticateToken } from "./middleware/middleware.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use((err, req, res, next) => {
    res.status(500).send("An unexpected error occurred: " + err.message);
});

// routes
app.use("/user", userRouter);
app.use("/post", postRouter);

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
app.use("/images", express.static(path.join(__dirname, "images")));

// handle file uploads
app.post("/upload", authenticateToken, upload.array("post-create-media-upload", 5), (req, res) => {
    console.log("Received request...");
    // 'mediaFiles' should match the name attribute in your HTML form 
    // Access the uploaded files in req.files
    const files = req.files;
    console.log("accessing " + files.length + " files...");
    // process the files as needed
    // log the file info
    files.forEach((file, index) => {
        console.log(`File ${index + 1}:`);
        console.log("Field name: ", file.fieldname);
        console.log("Original name: " + file.originalname);
        console.log("Size: " + file.size);
        console.log("MIME Type: " + file.mimetype);
        console.log("-------------------------------");
    });
    res.json({
        msg: "Files uploaded successfully"
    });
});

app.post("/upload2", authenticateToken, upload.array("post-create-media-upload"), (req, res) => {
    console.log("Received request for /upload2...");
    let ss = "";
    for (const key of Object.keys(req)) ss += `[${key}]\n`;
    console.log(ss);
    res.json({
        msg: "Success"
    });
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});