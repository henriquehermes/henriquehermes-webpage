import React from 'react';

import {
  Container,
  Header,
  UserImg,
  UserName,
  UserDescription,
  Redux,
  Body,
  NodeJS,
  ReactJS,
  ListTec,
  MongoDB,
  GraphQL,
  ReduxSaga
} from './styles';

const About = () => (
  <Container key="about">
    <Header>
      <UserImg src="https://i.ibb.co/Ks8dkrk/me.jpg" />
      <UserName>Henrique Hermes</UserName>
      <UserDescription>
        Lorem ipsum vehicula integer ornare pellentesque scelerisque pretium dui, hac aenean conubia
        hac placerat luctus dictum taciti, class curabitur in ullamcorper convallis iaculis
        ullamcorper. hac augue est a rhoncus mollis curabitur class quisque curabitur, sagittis enim
        litora leo suspendisse aenean feugiat himenaeos at mi, massa suspendisse rhoncus sagittis
        dictumst quisque gravida non.
      </UserDescription>
    </Header>
    <Body>
      <ListTec>
        <ReactJS />
        <ReactJS color="#222222" />
        <Redux />
        <ReduxSaga />
      </ListTec>
      <ListTec>
        <NodeJS />
        <MongoDB />
        <GraphQL />
      </ListTec>
    </Body>
  </Container>
);

export default About;
