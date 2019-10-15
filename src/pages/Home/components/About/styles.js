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
  width: 60px;
  height: 60px;
  transition: transform 0.2s linear;

  &:hover {
    ${animateScale}
  }
`;

export const Container = styled.div`
  background: #f6f6f6;
  height: 100vh;
  padding: 50px 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
`;

export const UserDescription = styled.p`
  text-align: center;
  width: 70%;
`;

export const ListTec = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
  width: 50%;
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
