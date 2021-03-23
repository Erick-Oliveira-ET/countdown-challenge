import Head from "next/head";
import React, { useEffect, useState } from "react";
import CardFlip from "../components/cardFlip";

import { Container, CountdownContainer, Footer } from "../styles/Home";

export default function Home() {
  const totalTime = 14 * 24 * 60 * 60 * 1000;
  const [time, setTime] = useState(totalTime);
  const [finish, setFinish] = useState<number>(Date.now() + totalTime);
  let timeLeft = finish - Date.now();

  const [seconds, setSeconds] = useState<number>(
    Math.floor(
      (((timeLeft % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) /
        1000
    )
  );
  const [minutes, setMinutes] = useState<number>(
    Math.floor(
      ((timeLeft % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000)
    )
  );
  const [hours, setHours] = useState<number>(
    Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  );
  const [days, setDays] = useState<number>(
    Math.floor(timeLeft / (24 * 60 * 60 * 1000))
  );

  useEffect(() => {
    if (finish - Date.now() >= 0) {
      setTimeout(() => {
        timeLeft = finish - Date.now();
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
    } else if (finish - Date.now() <= 0) {
      setFinish(Date.now() + totalTime);
    }
  }, [seconds]);

  return (
    <Container>
      <Head>
        <title>Countdown Challenge</title>
      </Head>
      <img src="bg-stars.svg" className="bgStars" alt="" />
      <h2>WE'RE LAUCHING SOON</h2>
      <CountdownContainer>
        <CardFlip number={days} type="days" />
        <CardFlip number={hours} type="hours" />
        <CardFlip number={minutes} type="minutes" />
        <CardFlip number={seconds} type="seconds" />
      </CountdownContainer>

      <Footer>
        <img src="pattern-hills.svg" className="patternHills" alt="" />
        <a href="https://www.facebook.com/" target="_blank">
          <img src="icon-facebook.svg" alt="" />
        </a>
        <a href="https://www.pinterest.com/" target="_blank">
          <img src="icon-pinterest.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="icon-instagram.svg" alt="" />
        </a>
      </Footer>
    </Container>
  );
}
