export const post = {
    create: {
        tab: {
            TAB_ENUM: {
                text: 1,
                images: 2
            }
        },
        title: {
            MAX_LENGTH: 300,
            error: {
                NOT_EMPTY: "Post title cannot be empty.",
                EXCEED_LIMIT: "Post title cannot exceed a maximum of 300 characters."
            }
        },
        content: {
            MAX_LENGTH: 20000,
            error: {
                NOT_EMPTY: "Post content cannot be empty.",
                EXCEED_LIMIT: "Post content cannot exceed a maximum of 2000 characters."
            }
        },
        error: {
            SERVER_ERROR: "Server error. A new post could not be created"
        }
    }
};