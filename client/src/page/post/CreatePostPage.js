import React, { useState, useRef } from "react";

import CreatePostView from "../../view/post/create/CreatePostView";
import { post } from "../../app/constant";
import { SERVER_URL } from "../../app/configuration";

function CreatePostPage() {
    // tabs
    const [selectedTab, setSelectedTab] = useState(post.create.tab.TAB_ENUM.text);
    // title
    const [title, setTitle] = useState("");
    // content
    const [content, setContent] = useState("");
    // error
    const [error, setError] = useState([]);  // an array of error messages as strings
    // refs
    const titleTextareaRef = useRef(null);
    const contentTextareaRef = useRef(null);
    // handlers
    const handleTitleInputChange = (e) => {
        titleTextareaRef.current.style.height = "inherit";
        titleTextareaRef.current.style.height = `${titleTextareaRef.current.scrollHeight}px`;
        setTitle(e.currentTarget.value);
    };
    const handleContentInputChange = (e) => {
        contentTextareaRef.current.style.height = "inherit";
        contentTextareaRef.current.style.height = `${contentTextareaRef.current.scrollHeight}px`;
        setContent(e.currentTarget.value);
    };
    const handleCreatePostSubmit = (e) => {
        // check for invalid fields
        const isValid = true;
        // if title is empty or exceeds limit, show error message in error section
        if (title.trim().length === 0) {
            setError((prev) => [...prev, post.create.title.error.NOT_EMPTY]);
            isValid = false;
        } else if (title.trim().length > post.create.title.MAX_LENGTH) {
            setError((prev) => [...prev, post.create.title.error.EXCEED_LIMIT]);
            isValid = false;
        }
        // if content is empty or exceeds limit, show error message in error section
        if (content.trim().length === 0) {
            setError((prev) => [...prev, post.create.content.error.NOT_EMPTY]);
            isValid = false;
        } else if (content.trim().length() > post.create.content.MAX_LENGTH) {
            setError((prev) => [...prev, post.create.content.error.EXCEED_LIMIT]);
            isValid = false;
        }
        if (isValid) {
            // send a request to server
            fetch(SERVER_URL + "/post/create", {
                method: "POST",
                /*
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access_token")
                },
                */
                body: {
                    title,
                    content
                }
            }).then(response => {
                if (response.status !== 201) {
                    setError((prev) => [...prev, post.create.error.SERVER_ERROR]);
                }
                return response.json();
            }).then(jsonData => {
                if (jsonData.error) throw new Error(jsonData.error);
                const postId = jsonData.postId;
                // navigate to post page
            }).catch(err => {
                alert("Unable to create a new post: " + err.message);
            });
        }
    };
    return (
        <CreatePostView
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            title={title}
            setTitle={setTitle}
            titleTextareaRef={titleTextareaRef}
            content={content}
            setContent={setContent}
            contentTextareaRef={contentTextareaRef}
            handleTitleInputChange={handleTitleInputChange}
            handleContentInputChange={handleContentInputChange}
            handleCreatePostSubmit={handleCreatePostSubmit}
        />
    );
}

export default CreatePostPage;