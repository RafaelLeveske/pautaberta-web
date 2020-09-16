import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 91px;
`;

export const Title = styled.div`
  width: 70%;

  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
  }
`;

export const SideContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 35.56px;
`;

export const PayIcon = styled.img`
  margin-right: 40.56px;
`;

export const BellIcon = styled.img``;

export const NewNotificationIcon = styled.img`
  margin-top: -18px;
  margin-left: -10px;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    margin-right: 14px;
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid #e6e6e6;
    padding: 2px;
  }
`;
