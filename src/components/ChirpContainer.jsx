import React from "react";

const ChirpContainer = (props) => {
  return (
    // Chirp Container is its own card with a nested list group
    <div
      className="card col-8 shadow p-3 mb-5 bg-white rounded"
      id="chirp-container"
    >
      <ul className="list-group list-group-flush">
        {props.posts.map((post, index) => 
          <li className="list-group-item" key={index}>
            <div className="card-body">
              <h5 className="card-title">@{post.name}</h5>
              <p className="card-text fs-3">
                {post.text}
              </p>
              <p className="text-muted">{post.time}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ChirpContainer;
