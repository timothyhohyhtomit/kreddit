class PostCommentModel {
    constructor(commentId, postId, parentCommentId, authorId, authorUsername, authorAvatarUrl, content, publishDate, ageMin, likeCount, childComments) {
        this.commentId = commentId;
        this.postId = postId;
        this.parentCommentId = parentCommentId;
        this.authorId = authorId;
        this.authorUsername = authorUsername;
        this.authorAvatarUrl = authorAvatarUrl;
        this.content = content;
        this.publishDate = publishDate;
        this.ageMin = ageMin;
        this.likeCount = likeCount;
        this.childComments = childComments;
    }
    get commentId() {
        return this.commentId;
    }
    get postId() {
        return this.postId;
    }
    get parentCommentId() {
        return this.parentCommentId;
    }
    get authorId() {
        return this.authorId;
    }
    get authorUsername() {
        return this.authorUsername;
    }
    get authorAvatarUrl() {
        return this.authorAvatarUrl;
    }
    get content() {
        return this.content;
    }
    get publishDate() {
        return this.publishDate;
    }
    get ageMin() {
        return this.ageMin;
    }
    get likeCount() {
        return this.likeCount;
    }
    get childComments() {
        return this.childComments;
    }
    /*
    getDate() returns the post date shown in a post, either as an exact date (posted at least a month ago), or a relative date (posted less than a month ago).
    Arguments:
    - publishDate: the date the post was created as a timestamp
    - ageMin: the age of the post in minutes
    Returns:
    - a string representing the post date
    */
    getDate() {
        if (this.ageMin < 1) return "Just now";
        else if (this.ageMin < 60) return `${Math.floor(this.ageMin)}m`;
        else if (this.ageMin < 24 * 60) return `${Math.floor(this.ageMin / 60)}hr`;
        else if (this.ageMin < 7 * 24 * 60) return `${Math.floor(this.ageMin / (24 * 60))}d`;
        else return `${Math.floor(this.ageMin / (7 * 24 * 60))}w`;
    }
}