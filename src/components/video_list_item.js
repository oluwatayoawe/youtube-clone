import React from 'react';

const VideoListItem = ({video, onSelect})=>{
console.log(video.snippet)
const imgUrl = video.snippet.thumbnails.default.url
const title = video.snippet.title;
const description = video.snippet.description;
  return(
        <li className="list-group-item" onClick={()=> onSelect(video) }>
          <div className="media">
            <img className="mr-3" src={imgUrl} alt="Generic placeholder image" />
            <div className="media-body">
              <h5 className="mt-0">{title}</h5>
              {description}
              </div>
          </div>
        </li>);
};

export default VideoListItem;
