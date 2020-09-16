import React from 'react';

import mainLogo from '../../assets/main-logo.svg';
import homeIcon from '../../assets/home-icon.svg';
import processIcon from '../../assets/process-icon.svg';
import clientIcon from '../../assets/client-icon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import financeIcon from '../../assets/finance-icon.svg';
import reportIcon from '../../assets/report-icon.svg';
import configurationIcon from '../../assets/configuration-icon.svg';

import { Container, Content, Menu, Footer } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={mainLogo} alt="Logo" />

        <Menu>
          <li>
            <a href="/home">
              <img src={homeIcon} alt="Home" />
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="/process">
              <img src={processIcon} alt="Processos" />
              <span>Processos</span>
            </a>
          </li>

          <li>
            <a href="/clients">
              <img src={clientIcon} alt="Clientes" />
              <span>Clientes</span>
            </a>
          </li>

          <li>
            <a href="/schedule">
              <img src={scheduleIcon} alt="Agenda" />
              <span>Agenda</span>
            </a>
          </li>

          <li>
            <a href="/finance">
              <img src={financeIcon} alt="Financeiro" />
              <span>Financeiro</span>
            </a>
          </li>

          <li>
            <a href="/report">
              <img src={reportIcon} alt="Relatórios" />
              <span>Relatórios</span>
            </a>
          </li>
        </Menu>

        <Footer>
          <a href="/configurations">
            <img src={configurationIcon} alt="Configurações" />
            <span>Configurações</span>
          </a>
        </Footer>
      </Content>
    </Container>
  );
};

export default SideBar;
