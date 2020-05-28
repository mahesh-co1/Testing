import React, { useRef, useState, useEffect } from "react";
import flvjs from "flv.js";

const Test = () => {
  const video = useRef();
  const id = "12";
  const rtsp = "rtsp://admin:123456@140.0.192.33:7070";

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (flvjs.isSupported()) {
      if (video) {
        // setPlayer(

        // );
        const player = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          //   url: "https://www.youtube.com/watch?v=74WSXAFXoDk&t=3532s",
          url: `ws://localhost:8888/rtsp/${id}/?url=${rtsp}`,
        });
        console.log(player);
        player.attachMediaElement(video.current);
        try {
          player.load();
          player.play();
        } catch (err) {
          console.log(err);
        }
      }
    }
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div>
      <video
        style={{ width: 640, height: 480 }}
        autoPlay={true}
        ref={video}
      ></video>
      <button
        onClick={() => {
          video.current.play();
        }}
      >
        Play
      </button>
    </div>
  );
};

export default Test;
