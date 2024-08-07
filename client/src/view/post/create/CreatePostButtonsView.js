import React from "react";

import ButtonMain from "../../general/button/ButtonMain";

import "./CreatePostButtonsView.css";

/*
CreatePostButtonsView renders a row of buttons in the bottom of create post page.
Arguments:
- handleCreatePostSubmit: on click handler for submit button
*/
function CreatePostButtonsView({ handleCreatePostSubmit }) {
    return (
        <div className="post-create-buttons">
            <ButtonMain
                text="Submit"
                handler={handleCreatePostSubmit}
            />
        </div>
    );
}

export default CreatePostButtonsView;