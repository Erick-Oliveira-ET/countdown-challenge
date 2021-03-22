import Head from "next/head";
import React, { useEffect, useState } from "react";
import CardFlip from "../components/cardFlip";

import {
  Container,
  CountdownContainer,
  Footer,
  NumberContainer,
} from "../styles/Home";

export default function Home() {
  const totalTime = 14 * 24 * 60 * 60 * 1000;
  const [time, setTime] = useState(totalTime);
  const [finish, setFinish] = useState<number>(Date.now() + totalTime);

  const [seconds, setSeconds] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [days, setDays] = useState<number>();

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        let timeLeft = finish - Date.now();
        let setdays = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
        let sethours = Math.floor(
          (timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );
        let setminutes = Math.floor(
          ((timeLeft % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000)
        );
        let setseconds = Math.floor(
          (((timeLeft % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) %
            (60 * 1000)) /
            1000
        );

        setDays(setdays);
        setHours(sethours);
        setMinutes(setminutes);
        setSeconds(setseconds);
      }, 1000);
    } else if (time === 0) {
      setTime(totalTime);
    }
  }, [seconds]);

  return (
    <Container>
      <Head>
        <title>Countdown Challenge</title>
      </Head>
      {/* <img src="bg-stars.svg" className="bgStars" alt="" /> */}
      {/* <img src="pattern-hills.svg" className="patternHills" alt="" /> */}
      <h2>WE'RE LAUCHING SOON</h2>
      <CountdownContainer>
        <CardFlip number={days} />
        <CardFlip number={hours} />
        <CardFlip number={minutes} />
        <CardFlip number={seconds} />

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
