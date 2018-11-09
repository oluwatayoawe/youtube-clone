import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item'
const VideoList = (props)=> {

  const VideoItems = props.videos.map((video)=> {
    return <VideoListItem key={video.etag} video={video} onSelect={props.onSelect}  />
  });

  return (
    <ul className="list-group">
    {VideoItems}
    </ul>
  );
}


export default VideoList;
