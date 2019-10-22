/* eslint-disable global-require */
import styled, { css } from 'styled-components';

const animateScale = css`
  transform: scale(1.1);
`;

const iconResponsive = css`
  @media (max-width: 320px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 321px) {
    width: 50px;
    height: 50px;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 700px) {
    height: 200px;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    height: 250px;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;

  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

export const Body = styled.div`
  margin-top: 30px;
  display: flex;
  width: 15%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 321px) and (max-width: 425px) {
    width: 40%;
  }

  @media (max-width: 320px) {
    width: 50%;
  }
`;

export const Wave = styled.img.attrs({
  src: require('../../../../images/contact/wave.svg'),
})`
  position: absolute;
  width: 100%;

  @media (max-width: 1120px) {
    bottom: 0;
  }
`;

export const Linkedin = styled.img.attrs({
  src: require('../../../../images/contact/linkedin.svg'),
})`
  ${iconResponsive}
`;

export const Github = styled.img.attrs({
  src: require('../../../../images/contact/github.svg'),
})`
  ${iconResponsive}
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  width: 50px;
  height: 50px;
  transition: transform 0.2s linear;

  &:hover {
    ${animateScale}
  }
`;

export const CodeType = styled.img.attrs({
  src: require('../../../../images/about/codeTyping.svg'),
})`
  position: absolute;
  right: 0;
  margin-right: 20px;
  width: 300px;
  z-index: 999;

  @media (min-width: 426px) and (max-width: 1024px) {
    bottom: 50px;
    width: 200px;
  }

  @media (max-width: 425px) {
    bottom: 25px;
    width: 100px;
  }

  @media (max-width: 320px) {
    bottom: 25px;
    width: 80px;
  }
`;
