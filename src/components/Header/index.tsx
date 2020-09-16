import React from 'react';

import payIcon from '../../assets/pay-icon.svg';
import bellIcon from '../../assets/bell-icon.svg';
import newNotificationIcon from '../../assets/new-notification-icon.svg';
import avatar from '../../assets/avatar.jpeg';

import {
  Container,
  Title,
  SideContent,
  IconContent,
  PayIcon,
  BellIcon,
  NewNotificationIcon,
  ProfileContent,
} from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>
        <h1>{children}</h1>
      </Title>
      <SideContent>
        <IconContent>
          <PayIcon src={payIcon} alt="Pay Icon" />
          <BellIcon src={bellIcon} alt="Bell Icon" />
          <NewNotificationIcon
            src={newNotificationIcon}
            alt="New Notification Icon"
          />
        </IconContent>
        <ProfileContent>
          <span>Rafael Vieira</span>
          <img src={avatar} alt="Avatar" />
        </ProfileContent>
      </SideContent>
    </Container>
  );
};

export default Header;
