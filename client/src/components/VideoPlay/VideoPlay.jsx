import React from "react";
import YouTube from "react-youtube";
import style from "./VideoPlay.module.css";

const VideoComponent = () => {
  // Aquí puedes definir las opciones del video, como el tamaño, los parámetros de la URL, etc.
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // Esto hace que el video se reproduzca automáticamente
      controls: 0, // Esto hace que los controles de YouTube no se muestren
      loop: 1, // Esto hace que el video se repita indefinidamente
      playlist: "qtVOAtCAkPU", // Esto es necesario para que el loop funcione correctamente
    },
  };

  return (
    <div>
      <YouTube videoId="qtVOAtCAkPU" opts={opts} className={style.iframe} />
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
