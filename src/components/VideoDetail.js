import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <p>Loading...</p>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="VideoDetail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title={video.snippet.title} src={url}
        />
      </div>
      <div className="details">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
