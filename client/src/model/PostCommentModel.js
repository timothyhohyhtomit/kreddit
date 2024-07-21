class PostCommentModel {
    constructor(commentId, postId, parentCommentId, authorId, authorUsername, authorAvatarUrl, content, publishDate, ageMin) {
        this.commentId = commentId;
        this.postId = postId;
        this.parentCommentId = parentCommentId;
        this.authorId = authorId;
        this.authorUsername = authorUsername;
        this.authorAvatarUrl = authorAvatarUrl;
        this.content = content;
        this.publishDate = publishDate;
        this.ageMin = ageMin;
    }
}