    import React, { Component } from "react";
    import VideoListItem from "./video_list_item";

    const VideoList =(props)=>{
      const videoItems=  props.videos.map((video) =>
        {
            return <VideoListItem video={video} onVideoSelect={props.onVideoSelect} />;
        }

        )
        return(
            <ul className="col-md-4 list-group" >
            {/* {props.videos.length} */}
            {videoItems}
            </ul>
        );
    }
    export default VideoList;