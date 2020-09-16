import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 255px;
  height: 1234px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  box-shadow: -4px 0px 19px 8px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 217px;
    height: 74px;
    margin: 30px 21px 0 17px;
  }
`;

export const Menu = styled.ul`
  margin-top: 39px;

  li {
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;

    &:first-child {
      border-top: 1px solid #e6e6e6;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;

      img {
        width: 25px;
        height: 23px;
        margin: 0 17px 0 32px;
      }

      span {
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;

        letter-spacing: 0.2px;

        color: #9fa2b4;
      }
    }
  }
`;

export const Footer = styled.div`
  height: 120px;
  margin-top: 587px;
  border-top: 1px solid #e6e6e6;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;

    img {
      width: 25px;
      height: 23px;
      margin: 0 17px 0 32px;
    }

    span {
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;

      letter-spacing: 0.2px;

      color: #9fa2b4;
    }
  }
`;
