import React, { useEffect, useState } from "react";
import { NumberContainer } from "../styles/Home";

const CardFlip = ({ number, type }) => {
  const [flip, setFlip] = useState(false);

  const [flipDisplayTop, setFlipDisplayTop] = useState(number);
  const [flipDisplayBottom, setFlipDisplayBottom] = useState(number);
  const [flipperTop, setFlipperTop] = useState(number + 1);
  const [flipperBottom, setFlipperBottom] = useState(number + 1);

  let maxType = {
    hours: 24,
    minutes: 60,
    seconds: 60,
  };

  let maxSubstitutionType = {
    hours: 23,
    minutes: 59,
    seconds: 59,
  };

  useEffect(() => {
    setFlipDisplayBottom(
      number === maxType[type] ? maxSubstitutionType[type] : number
    );
    setFlipperTop(
      number === maxType[type] ? maxSubstitutionType[type] : number
    );

    setFlipDisplayTop(
      number - 1 === -1 ? maxSubstitutionType[type] : number - 1
    );
    setFlipperBottom(
      number - 1 === -1 ? maxSubstitutionType[type] : number - 1
    );

    setFlip(true);

    if (type === "seconds") {
      setTimeout(() => {
        setFlipDisplayBottom(
          number - 1 === -1 ? maxSubstitutionType[type] : number - 1
        );
        setFlipperTop(
          number - 1 === -1 ? maxSubstitutionType[type] : number - 1
        );
      }, 700);
    }
    setTimeout(() => {
      setFlip(false);
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
