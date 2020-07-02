import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://i.ibb.co/FYCccPT/pool-patio7.jpg');
  background-position: 0 40%;
  height: 35vh;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const HeroText = styled.div`
  color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  align-self: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media screen and (min-width: 500px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 820px) {
    font-size: 2.5rem;
  }
`;

export const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  padding: 0 6px 0 6px;
  @media screen and (min-width: 820px) {
    font-size: 22px;
  }

  & h3 {
    width: 100%;
    @media screen and (min-width: 500px) {
      width: 75%;
    }
    @media screen and (min-width: 820px) {
      width: 75%;
    }
  }
`;

export const ContactPhone = styled.div`
  align-self: center;
  color: #4193cb;
  margin-top: 4px;
`;

export const PhoneNumber = styled.a`
  color: inherit;
  font-size: 20px;
  margin-left: 6px;

  @media screen and (min-width: 500px) {
    font-size: 22px;
  }
  @media screen and (min-width: 820px) {
  }
`;
