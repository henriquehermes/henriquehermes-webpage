import styled, { css } from 'styled-components';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import svgNodeJS from '../../../../images/about/nodejs.svg';
import svgRedux from '../../../../images/about/redux.svg';
import svgReduxSaga from '../../../../images/about/redux-saga.svg';
import svgGraphQL from '../../../../images/about/graphql.svg';
import svgMongoDB from '../../../../images/about/mongodb.svg';

const animateScale = css`
  transform: scale(1.1);
`;

const iconsStyle = css`
  transition: transform 0.2s linear;
  margin-right: 10px;

  @media (max-width: 320px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 321px) {
    width: 60px;
    height: 60px;
  }

  &:hover {
    ${animateScale}
  }
`;

export const Container = styled.div`
  background: #f6f6f6;
  height: 100%;
  padding: 50px 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 725px) {
    height: 100%;
    padding: 30px 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.img.attrs({
  src: require('../../../../images/about/me.png'),
})`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 3px 10px 30px 2px rgba(0, 0, 0, 0.28);
  transition: transform 0.2s linear;

  &:hover {
    ${animateScale}
  }
`;

export const UserName = styled.span`
  font-size: 38px;
  font-weight: 700;
  margin: 20px 0;

  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

export const UserDescription = styled.h4`
  font-weight: normal;
  text-align: center;
  width: 70%;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const ListTec = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 80px 0px;
  justify-content: space-around;
  align-items: center;
  width: 50%;

  @media (max-width: 725px) {
    width: 90%;
    margin-top: 50px;
  }
`;

export const Redux = styled.img.attrs({ src: svgRedux })`
  ${iconsStyle}
`;

export const NodeJS = styled.img.attrs({ src: svgNodeJS })`
  ${iconsStyle}
`;

export const ReduxSaga = styled.img.attrs({ src: svgReduxSaga })`
  ${iconsStyle}
`;

export const MongoDB = styled.img.attrs({ src: svgMongoDB })`
  ${iconsStyle}
`;

export const GraphQL = styled.img.attrs({ src: svgGraphQL })`
  ${iconsStyle}
`;

export const ReactJS = styled(ReactLogo)`
  ${iconsStyle};
  color: ${props => props.color || '#5CDDFE'};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
