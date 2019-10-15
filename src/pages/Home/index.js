import React, { createRef } from 'react';

import { Container } from './styles';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

const Home = () => {
  const refAbout = createRef();

  function scrollt() {
    refAbout.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
  return (
    <Container>
      <Header scrollt={() => scrollt()} />
      <About ref={refAbout} />
      <Contact />
    </Container>
  );
};

export default Home;
