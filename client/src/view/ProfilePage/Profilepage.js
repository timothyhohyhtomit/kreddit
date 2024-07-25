import React from "react";

const Profilepage = () => {
  /**
   * Not sure how you wanna go with this but you can use props to pass in the data
   * like the user's name, profile picture, and posts.
   */
  return (
    <div className="min-h-screen bg-[#303030] h-full w-full">
      {/* top parts */}
      <div className="image-wall">
        <div className="flex flex-row">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="avatar"
              />
            </div>
          </div>
          <div className="profile-name flex-col-reverse flex">
            <h1 className="text-2xl font-bold">John Doe</h1>
          </div>
        </div>
      </div>

      {/* posts */}
      <div className="post">
        <div>
          <div className="flex w-52 flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="skeleton h-32 w-full"></div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
