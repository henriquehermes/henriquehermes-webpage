/* eslint-disable global-require */
import styled, { css } from 'styled-components';

const animateScale = css`
  transform: scale(1.1);
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
`;

export const Body = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wave = styled.img.attrs({
  src: require('../../../../images/contact/wave.svg'),
})`
  position: absolute;
  width: 100%;
`;

export const Linkedin = styled.img.attrs({
  src: require('../../../../images/contact/linkedin.svg'),
})`
  width: 50px;
  height: 50px;
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
`;
