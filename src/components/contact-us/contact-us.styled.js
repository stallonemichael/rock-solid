import styled from 'styled-components';

export const ContactUsContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  color: ${({ theme }) => theme.primaryLight};
`;

export const FormContainer = styled.form`
  width: 90%;
  margin-bottom: 24px;

  @media screen and (min-width: 550px) {
    width: 60%;
  }

  @media screen and (min-width: 800px) {
    width: 40%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormMessageContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
