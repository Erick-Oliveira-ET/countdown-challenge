import React, { useEffect, useState } from "react";
import { NumberContainer } from "../styles/Home";

const CardFlip = ({ number }) => {
  const [flip, setFlip] = useState(false);

  const [flipDisplayTop, setFlipDisplayTop] = useState(number);
  const [flipDisplayBottom, setFlipDisplayBottom] = useState(number);
  const [flipperTop, setFlipperTop] = useState(number + 1);
  const [flipperBottom, setFlipperBottom] = useState(number + 1);

  useEffect(() => {
    setFlipDisplayBottom(number);
    setFlipperTop(number);

    setFlipDisplayTop(number - 1);
    setFlipperBottom(number - 1);

    setFlip(true);

    setTimeout(() => {
      setFlip(false);
      setFlipDisplayBottom(number - 1);
      setFlipperTop(number - 1);
    }, 800);
  }, [number]);

  return (
    <NumberContainer>
      <div className={`flip-card ${flip ? "play" : ""}`}>
        <div className="flip-display">
          <div className="flip-display-top">{flipDisplayTop}</div>
          <div className="flip-display-bottom">{flipDisplayBottom}</div>
        </div>
        <div className="flipper">
          <div className="flipper-top">{flipperTop}</div>
          <div className="flipper-bottom">{flipperBottom}</div>
        </div>
        <div
          className="flip-display"
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            alignItems: "center",
          }}
        ></div>
      </div>
    </NumberContainer>
  );
};

export default CardFlip;
