import Head from "next/head";
import React, { useState } from "react";

import {
  BackNumber,
  Card,
  Container,
  CountdownContainer,
  Footer,
  FrontNumber,
  NumberContainer,
} from "../styles/Home";

export default function Home() {
  const [clicked, setOnClicked] = useState(false);

  return (
    <Container>
      <Head>
        <title>Countdown Challenge</title>
      </Head>
      <img src="bg-stars.svg" className="bgStars" alt="" />
      <img src="pattern-hills.svg" className="patternHills" alt="" />
      <h2>WE'RE LAUCHING SOON</h2>
      <CountdownContainer>
        <NumberContainer>
          <div className="digit">
            {/* <Card>
              <span className="backNumber">07</span>
              <span className="frontNumber">08</span>
            </Card> */}
          </div>
        </NumberContainer>
        <div>
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
        </div>
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
