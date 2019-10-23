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
  ReduxSaga,
} from './styles';

const About = () => (
  <Container id="about">
    <Header>
      <UserImg />
      <UserName>Henrique Hermes</UserName>
      <UserDescription>
        Se aventurando no mundo da programação desde 2017, utilizando JavaScript
        como linguagem para desenvolvimento de aplicaçōes Web, Mobile e Backend.
        Utilizo as bibliotecas mais conhecidas da comunidade ReactJS e React
        Native, costumo experimentar novas ferramentas e caso seja positiva,
        proponho a implementacao da mesma com minha equipe.
        <br />
        Além do React estar me acompanhando desde o início, metodos ageís tambem
        estão presentes no meu dia a dia (Daily, Planning, Grooming, Review e
        Retro)
        <br />
A pouco tempo atras, me surgiu o interesse em aprender Backend com
        NodeJS, aproveitando os conhecimentos de JavaScript no FrontEnd,
        construi aplicaçōes com NoSQL e SQL como aprendizado, continuo
        consumindo conteudos para aprimorar o meu conhecimento nesta àrea.
</UserDescription>
    </Header>
    <Body>
      <ListTec>
        <ReactJS />
        <ReactJS color="#222222" />
        <Redux />
        <ReduxSaga />
        <NodeJS />
        <MongoDB />
        <GraphQL />
      </ListTec>
      <UserName>Projects</UserName>
    </Body>
  </Container>
);

export default About;
