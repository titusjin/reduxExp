<<<<<<< HEAD
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
=======
import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
>>>>>>> upstream/master
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
<<<<<<< HEAD
        video={video} />
=======
        video={video}
      />
>>>>>>> upstream/master
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
