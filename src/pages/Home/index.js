import React from 'react';

import { Container } from './styles';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

const Home = () => (
  <Container>
    <Header />
    <About />
    <Contact />
  </Container>
);

export default Home;
