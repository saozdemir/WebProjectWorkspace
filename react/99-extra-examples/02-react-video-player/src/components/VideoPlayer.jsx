import React from 'react'
import ReactPlayer from "react-player";

function VideoPlayer() {
    //* https://www.youtube.com/watch?v=jBDTsf8jsEs
    //* npm install react-player
    return (
        <div>
            <h1>VideoPlayerim</h1>
            <ReactPlayer
                url={"https://youtu.be/gM6Vwc3ZNVY"}
                controls={true}
                width={"640px"}
                height={"360px"}
            ></ReactPlayer>
        </div>
    )
}

export default VideoPlayer
