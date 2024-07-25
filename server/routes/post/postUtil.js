// database
// import { query } from "../../db/util.js";
// file system
import fs from "fs";
import { promisify } from "util";

/* Post Fetching
getPost() queries the database for the details of a post in JSON syntax.
*/
export const getPost = async (postId) => {
    return Promise.all([
        query(`
        `),
        //getPostMedia(postId),
        getPostLikeCount(postId),
        getPostComments(postId)
    ]).then((values) => {
        const post = values[0][0];
        if (post.is_deleted) throw new Error("This post has been deleted");
        else if (post.is_banned) throw new Error("This post contains content this is against our policy and is under review.");
        // post available, extract media, like count and comments
        //const postMedia = values[1];
        const postLikeCount = values[1];
        const postComments = values[2].map((comment) => {
            return {
                ...comment//,
                //author_avatar_url: getMediaUrl(comment.author_avatar_key, comment.author_avatar_bucket)
            };
        });
        return {
            ...post,
            //media: postMedia,
            like_count: postLikeCount,
            comments: postComments
        };
    }).catch(err => {
        console.log("getPost(): " + err.message);
        throw new Error(err.message);
    });
};

/* Post Like Count Fetching
getPostLikeCount() returns the number of likes a post has received.
Inputs:
- postId
Output:
- integer: number of likes
*/
export const getPostLikeCount = (postId) => {
    return query(`
        SELECT COUNT(*) AS like_count
        FROM post_vote
    `).then(result => parseInt(result[0].like_count))
    .catch(err => {
        throw new Error(err.message);
    });
};