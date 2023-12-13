import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wheat from "../assets/Wheat.jpg";
import forest from "../assets/forest.jpg";
import lake from "../assets/lake.jpg";

export default function ImageTrack() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [position, setPosition] = useState(0);

  const handleMouseDown = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setMouseDownAt(clientX);
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(position);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const mouseDelta = mouseDownAt - clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    setPosition(nextPercentage);
  };

  const trackStyle = {
    display: "flex",
    transform: `translateX(${position}%)`,
    transition: "transform 0.3s ease",
    justifyContent: "space-evenly",
  };

  const imageStyle = {
    width: "200px",
    height: "auto",
    objectFit: "cover",
    margin: "0 10px",
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 1,
    background: "transparent",
    border: "none",
    color: "White",
  };

  const imageContainerStyle = {
    position: "relative",
    margin: "0 10px 0 10px",
  };

  return (
    <div
      id="image-track"
      style={trackStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleMouseMove}
    >
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={forest} alt="An image with green forest" />
        <Link to="/home">
          <button style={buttonStyle}>HomePage</button>
        </Link>
      </div>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={Wheat} alt="laptop" />
        <Link to="/about">
          <button style={buttonStyle}>About Me</button>
        </Link>
      </div>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={lake} alt="An image with green forest" />
        <Link to="/resume">
          <button style={buttonStyle}>Resume</button>
        </Link>
      </div>
    </div>
  );
}
