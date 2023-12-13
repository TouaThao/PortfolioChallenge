import React from "react";

import ImageTrack from "./ImgTrack";

export default function Default() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <ImageTrack />
    </div>
  );
}
