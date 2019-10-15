import React from 'react';

import {
  Container,
  H1,
  MenuBar,
  Body,
  MenuLabel,
  MenuButton,
  H3,
  NodeJS,
  ListIcons,
  ReactJS,
  Image,
  Wave,
} from './styles';

const Header = scrollt => (
  <Container>
    <Wave />
    <MenuBar>
      <MenuButton onClick={() => scrollt()}>
        <MenuLabel>About</MenuLabel>
      </MenuButton>
      <MenuButton>
        <MenuLabel>Contact</MenuLabel>
      </MenuButton>
    </MenuBar>
    <Body>
      <Image />
      <H1>Front End Developer</H1>
      <H3>
        Creating amazing Apps since 2017 with ReactJS and React Native.
        Sometimes kidding with Back-end using NodeJS.
      </H3>
      <ListIcons>
        <ReactJS color="#61dafb" />
        <NodeJS color="#fff" />
      </ListIcons>
    </Body>
  </Container>
);

export default Header;
