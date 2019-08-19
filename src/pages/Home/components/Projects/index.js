import React from 'react';

import {
  Container,
  Title,
  Body,
  Tecnology,
  ProjectButton,
  Header,
  ReactJS,
  ProjectsList,
  NodeJS
} from './styles';

const Projects = () => (
  <Container>
    <Title>Portfólio</Title>
    <Body>
      <Header>
        <ReactJS />
        <Tecnology>ReactJS</Tecnology>
      </Header>
      <ProjectsList>
        {[1, 2, 3, 4].map(index => (
          <ProjectButton marginRight={index <= 3 ? '15px' : '0px'} />
        ))}
      </ProjectsList>

      <Header>
        <ReactJS color="#222222" />
        <Tecnology>React Native</Tecnology>
      </Header>
      <ProjectsList>
        {[1, 2, 3, 4].map(index => (
          <ProjectButton color="#222222" marginRight={index <= 3 ? '15px' : '0px'} />
        ))}
      </ProjectsList>

      <Header>
        <NodeJS />
        <Tecnology>NodeJS</Tecnology>
      </Header>
      <ProjectsList>
        {[1, 2].map(index => (
          <ProjectButton color="#3C873A" marginRight={index <= 1 ? '15px' : '0px'} />
        ))}
      </ProjectsList>
    </Body>
  </Container>
);

export default Projects;
