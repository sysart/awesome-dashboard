import React, { Fragment } from "react";
import styled from "styled-components";

const Filler = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const videoID = "UuWr5TCbumI";

const Background = () => (
  <Fragment>
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
    <Filler />
  </Fragment>
);

export default Background;
