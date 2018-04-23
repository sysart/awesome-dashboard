import React from "react";

const videoID = "Z0FETzb32Hs";

const Background = () => (
  <iframe
    title="background video"
    style={{
      width: "100vw",
      height: "100vh"
    }}
    src={`https://www.youtube.com/embed/${videoID}?version=3&autoplay=1&loop=1&rel=0&controls=0&showinfo=0&mute=1`}
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  />
);

export default Background;
