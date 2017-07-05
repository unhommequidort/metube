import React from "react";
import "./VideoListItem.css";

const VideoListItem = ({ video }) =>
  <li className="VideoListItem list-group-item">
    <div className="media">
      <div className="media-left">
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="media-body">
        <span className="media-heading">
          {video.snippet.title}
        </span>
      </div>
    </div>
  </li>;

export default VideoListItem;
