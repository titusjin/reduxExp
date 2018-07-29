<<<<<<< HEAD
import React from 'react';

const VideoDetail = ({video}) => {
=======
import React from "react";

const VideoDetail = ({ video }) => {
>>>>>>> upstream/master
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
<<<<<<< HEAD
        <iframe className="embed-responsive-item" src={url}></iframe>
=======
        <iframe className="embed-responsive-item" src={url} />
>>>>>>> upstream/master
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
