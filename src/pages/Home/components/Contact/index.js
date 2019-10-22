import React from 'react';

import {
  Container,
  Title,
  Body,
  Wave,
  Linkedin,
  Button,
  Github,
  CodeType,
} from './styles';

const Projects = () => (
  <Container id="contact">
    <CodeType />
    <Title>Contact</Title>
    <Body>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ zIndex: 999 }}
        href="https://www.linkedin.com/in/henrique-hermes-59703a121/"
      >
        <Button>
          <Linkedin />
        </Button>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ zIndex: 999 }}
        href="https://github.com/henriquehermes"
      >
        <Button>
          <Github />
        </Button>
      </a>
    </Body>
    <Wave />
  </Container>
);

export default Projects;
