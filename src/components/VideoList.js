import React from "react";
import VideoListItem from "./VideoListItem";
const VideoList = props => {
  const videoItems = props.videos.map(video =>
    <VideoListItem key={video.etag} video={video} />
  );
  return (
    <div className="VideoList col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
