import React from "react";
import VideoListItem from "./VideoListItem";
const VideoList = props => {
  const videoItems = props.videos.map(video =>
    <VideoListItem key={video.etag} video={video} />
  );
  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
