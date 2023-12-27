import React from "react";
import YouTube from "react-youtube";
import style from "./VideoPlay.module.css";

const VideoComponent = () => {
  const opts = {
    height: "315",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      modestbranding: 1, 
      playlist: "qtVOAtCAkPU",
    },
  };

  const handleReady = (event) => {
    event.target.mute();
  };

  return (
    <div className={style.iframeContainer}>
      <YouTube
        videoId="qtVOAtCAkPU"
        opts={opts}
        containerClassName={style.iframeVideo}
        onReady={handleReady}
      />
    </div>
  );
};

export default VideoComponent;



/* import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.autoplay = true; // Reproducir automáticamente
      videoRef.current.loop = true; // Repetir en bucle
      videoRef.current.controls = false; // Ocultar controles
    }
  }, []);

  return (
    <div className="w-[100%] flex items-center justify-center py-[50px]">
      <video ref={videoRef} width="100%" height="auto">
        <source src="/Dota.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoPlayer; */
