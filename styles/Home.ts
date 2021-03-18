import styled from "styled-components";

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
  z-index: 1;
  width: 780px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  * {
    user-select: none;
    cursor: default;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: white;
  }

  div > div {
    flex: 1;
    font-size: 5.25rem;
    margin: 0 0.5rem;
  }

  div h3 {
    color: var(--Grayish-blue);
  }
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

const NumberContainer = styled.div`
  position: relative;
  .digit {
    background: #ffffff;
    display: flex;
    justify-content: center;
  }

  height: 100px;
  width: 140px;

  font-size: 5.25rem;

  .digit::after,
  .digit::before {
    position: absolute;
    z-index: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  .digit::before {
    content: "01";
    /* bottom: 0; */
    /* align-items: flex-start; */
  }

  .digit::after {
    content: "02";
    /* top: 0; */
    /* align-items: flex-end; */
  }
`;

const Card = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 50%;

  transform-style: preserve-3d;
  transform-origin: bottom;
  transform: rotateX(0);

  div {
    position: absolute;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    overflow: hidden;

    /* backface-visibility: hidden; */
  }

  span {
    background: #ffffff;
  }

  .frontNumber {
    align-items: flex-end;
  }

  .backNumber {
    align-items: flex-start;
    transform: rotateX(-180deg);
  }
`;

export { Container, CountdownContainer, Footer, NumberContainer, Card };
