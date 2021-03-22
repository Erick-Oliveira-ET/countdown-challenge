import styled, { keyframes } from "styled-components";

const Container = styled.div`
  z-index: 1;
  min-height: 100vh;
  min-width: 100vw;

  padding: 0 0.5rem;

  background-color: var(--Very-dark-blue);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 40px 0 0 0;
    color: var(--White);
    letter-spacing: 0.34em;
    font-size: 22px;
    font-weight: 700;
  }

  img.bgStars {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;
  }

  img.patternHills {
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: 0;

    width: 100vw;
  }
`;

const CountdownContainer = styled.div`
  z-index: 0;
  width: 780px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Footer = styled.footer`
  z-index: 1;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 0.5rem;
  }

  img:hover {
    fill: var(--Soft-red);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface NumberContainerProps {
  numberBefore: string;
  numberAfter: string;
}

const flipperTopAnimation = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50%,
  100% {
    transform: rotateX(-90deg);
  }
`;
const flipperBottomAnimation = keyframes`
  0%, 50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const NumberContainer = styled.div`
  z-index: 1;
  .flip-card {
    height: var(--flip-height);
    width: var(--flip-width);
    border-radius: var(--flip-border-radius);
    font-size: calc(var(--flip-height) * 0.5);
    font-weight: 700;
    position: relative;
    margin: 0 0.2rem;
  }

  .flip-display {
    height: var(--flip-height);
    width: var(--flip-width);

    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .flip-display-top,
  .flip-display-bottom {
    position: relative;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: calc(var(--flip-height) * 0.5);
    background-color: var(--flip-container-color);
    color: var(--flip-text-color);
    line-height: calc(var(--line-height) * var(--i));
  }

  .flip-display-top {
    --i: 2;

    background-color: green;
    border-top-left-radius: var(--flip-border-radius);
    border-top-right-radius: var(--flip-border-radius);
  }

  .flip-display-bottom {
    --i: -2;
    background-color: blue;

    border-bottom-left-radius: var(--flip-border-radius);
    border-bottom-right-radius: var(--flip-border-radius);
  }

  .flipper {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: var(--flip-height);
    width: var(--flip-width);
    perspective: var(--perspective);
  }

  .flipper-top,
  .flipper-bottom {
    position: absolute;
    left: -10%;
    right: -10%;
    width: var(--flip-width);
    margin: auto;
    text-align: center;
    height: calc(var(--flip-height) * 0.5);
    line-height: calc(var(--line-height) * var(--i));
    overflow: hidden;
    background-color: var(--flip-color);
    color: var(--flip-text-color);
  }

  .flipper-top {
    --i: 2;
    transform: rotateX(0deg);

    transform-origin: bottom;
    top: 0;
    background-color: red;

    border-top-left-radius: var(--flip-border-radius);
    border-top-right-radius: var(--flip-border-radius);
  }

  .flipper-bottom {
    --i: -2;

    background-color: yellow;
    transform: rotateX(90deg);

    transform-origin: top;
    bottom: 0;

    border-bottom-left-radius: var(--flip-border-radius);
    border-bottom-right-radius: var(--flip-border-radius);
  }

  .flip-card.play .flipper-top {
    animation: ${flipperTopAnimation} var(--animation-ease)
      var(--animation-time) 1;
  }

  .flip-card.play .flipper-bottom {
    animation: ${flipperBottomAnimation} var(--animation-ease)
      var(--animation-time) 1;
  }
`;

export { Container, CountdownContainer, Footer, NumberContainer };