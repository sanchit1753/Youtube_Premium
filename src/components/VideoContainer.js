import { YOUTUBE_VIDEOS_API } from "../Utils/Constants";
import { useEffect } from "react";

const VideoContainer = () => {
   useEffect(() =>{
    getVideos();
   },[]);

   const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
   };

  return <div>VideoContainer</div>;
};

export default VideoContainer;
