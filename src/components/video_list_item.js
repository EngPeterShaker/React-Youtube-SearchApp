import React, { Component } from "react";

const VideoListItem = props => {
  console.log(props);
  const video = props.video;
  const onVideoSelect = props.onVideoSelected ;
  // const imageURL = video.snippet
  return (
       // <li> {props.video.snippet.title} </li>
    //    render(

           <li className="list-group-item" onClick={() => props.onVideoSelect(video)} >
    {video.snippet.title}
    <div className="media-left">
      <img
        className="media-object"
        src={video.snippet.thumbnails.default.url}/>
    </div>
    <div className="media-body">
      <div className="media-heading">{video.snippet.title}</div>
    </div>
  </li>)
// );
};
export default VideoListItem;

// {{this.props.state.snippet.title}}
