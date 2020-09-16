import React from 'react';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <SideBar />
      <Container>
        <Header>Home</Header>
      </Container>
    </>
  );
};

export default Home;
