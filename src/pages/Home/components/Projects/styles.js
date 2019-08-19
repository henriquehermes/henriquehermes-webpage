import styled, { css } from 'styled-components';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import svgNodeJS from '../../../../images/about/nodejs.svg';

const animateScale = css`
  transform: scale(1.1);
`;

const animateSlaceMargin = css`
  transform: scale(1.1);
  margin: 0px 30px 0px 15px;
`;

const iconsStyle = css`
  width: 40px;
  height: 40px;
`;

export const Container = styled.div`
  background: #f6f6f6;
  height: 100vh;
  padding: 50px 30px;
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
  width: 100%;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.2s linear;

  &:hover {
    ${animateScale}
  }
`;

export const ReactJS = styled(ReactLogo)`
  ${iconsStyle};
  color: ${props => props.color || '#5CDDFE'};
`;

export const Tecnology = styled.h2`
  margin-left: 15px;
`;

export const ProjectButton = styled.button`
  cursor: pointer;
  border: ${props => props.color || '#5cddfe'} solid 1px;
  width: 120px;
  height: 120px;
  background: ${props => props.color || '#5cddfe'};
  border-radius: 50%;
  margin-right: ${props => props.marginRight || ''};
  box-shadow: 3px 10px 30px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s linear;

  &:hover {
    ${animateSlaceMargin}
  }
`;

export const ProjectsList = styled.div`
  margin: 20px 0;
  display: flex;
`;

export const NodeJS = styled.img.attrs({ src: svgNodeJS })`
  ${iconsStyle}
`;
