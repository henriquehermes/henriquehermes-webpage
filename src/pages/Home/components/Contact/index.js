import React from 'react';

import {
  Container,
  Title,
  Body,
  Wave,
  Linkedin,
  Button,
  CodeType,
} from './styles';

const Projects = () => (
  <Container>
    <CodeType />
    <Title>Contact</Title>
    <Body>
      <a
        style={{ zIndex: 999 }}
        href="https://www.linkedin.com/in/henrique-hermes-59703a121/"
      >
        <Button>
          <Linkedin />
        </Button>
      </a>
    </Body>
    <Wave />
  </Container>
);

export default Projects;
