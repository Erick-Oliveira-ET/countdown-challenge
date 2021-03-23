import React, { useEffect, useState } from "react";
import { NumberContainer } from "../styles/Home";

const CardFlip = ({ number, type }) => {
  let maxSubstitutionType = {
    hours: 23,
    minutes: 59,
    seconds: 59,
  };
  const [flip, setFlip] = useState(false);

  const [flipDisplayBottom, setFlipDisplayBottom] = useState(number);

  const [flipperTop, setFlipperTop] = useState(number);
  const [flipDisplayTop, setFlipDisplayTop] = useState(
    number - 1 === -1 ? maxSubstitutionType[type] : number
  );
  const [flipperBottom, setFlipperBottom] = useState(
    number - 1 === -1 ? maxSubstitutionType[type] : number
  );

  useEffect(() => {
    setFlip(true);

    setFlipDisplayTop(number);
    setFlipperBottom(number);

    setTimeout(() => {
      setFlipDisplayBottom(number);
      setFlipperTop(number);

      setFlip(false);
    }, 900);
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
      <h3>{type.toUpperCase()}</h3>
    </NumberContainer>
  );
};

export default CardFlip;
