import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.img``;

const Background = () => (
  <BackgroundImage
    src={`https://picsum.photos/1920/1080/?blur&random&t=${Date.now()}`}
    style={{
      width: "auto",
      height: "100vh"
    }}
  />
);

export default Background;
