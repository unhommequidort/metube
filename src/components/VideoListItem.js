import React from "react";
import "./VideoListItem.css";

const VideoListItem = props =>
  <li
    className="VideoListItem list-group-item"
    onClick={() => props.onVideoSelect(props.video)}
  >
    <div className="media">
      <div className="media-left">
        <img
          src={props.video.snippet.thumbnails.default.url}
          alt={props.video.snippet.title}
        />
      </div>
      <div className="media-body">
        <span className="media-heading">
          {props.video.snippet.title}
        </span>
      </div>
    </div>
  </li>;

export default VideoListItem;
