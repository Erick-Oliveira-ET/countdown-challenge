import Head from "next/head";
import React, { useEffect, useState } from "react";

import {
  Container,
  CountdownContainer,
  Footer,
  NumberContainer,
} from "../styles/Home";

export default function Home() {
  const [play, setPlay] = useState("play");
  const [backSeconds, setBackSeconds] = useState(1);
  const [frontSeconds, setFrontSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setFrontSeconds(backSeconds);
      setBackSeconds(frontSeconds + 1);
      setPlay(play == "play" ? "" : "play");
    }, 1000);
  }, [play]);

  return (
    <Container>
      <Head>
        <title>Countdown Challenge</title>
      </Head>
      {/* <img src="bg-stars.svg" className="bgStars" alt="" /> */}
      {/* <img src="pattern-hills.svg" className="patternHills" alt="" /> */}
      <h2>WE'RE LAUCHING SOON</h2>
      <CountdownContainer>
        <NumberContainer>
          <div className={`flip-card ${play}`}>
            <div className="flip-display">
              <div className="flip-display-top">{backSeconds}</div>
              <div className="flip-display-bottom">{frontSeconds}</div>
            </div>
            <div className="flipper">
              <div className="flipper-top">{frontSeconds}</div>
              <div className="flipper-bottom">{backSeconds}</div>
            </div>
          </div>
        </NumberContainer>
        {/* <div>
          <div>
            <span>23</span>
          </div>
          <h3>Hours</h3>
        </div>
        <div>
          <div>
            <span>55</span>
          </div>
          <h3>Minutes</h3>
        </div>
        <div>
          <div>
            <span>41</span>
          </div>
          <h3>Seconds</h3>
        </div> */}
      </CountdownContainer>

      <Footer>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="icon-facebook.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="icon-pinterest.svg" alt="" />
        </a>
        <a href="https://pinterest.com/" target="_blank">
          <img src="icon-instagram.svg" alt="" />
        </a>
      </Footer>
    </Container>
  );
}
