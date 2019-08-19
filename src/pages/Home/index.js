import React, { createRef } from 'react';

import { Container } from './styles';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

const Home = () => {
  const refAbout = createRef();

  function scrollt() {
    refAbout.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }
  return (
    <Container>
      <Header scrollt={() => scrollt()} />
      <About ref={refAbout} />
      <Projects />
    </Container>
  );
};

export default Home;
