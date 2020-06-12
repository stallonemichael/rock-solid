import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4193cb;
`;

export const Divider = styled.div`
  height: 5px;
  width: 85%;
  display: flex;
  align-items: center;
  border-top: 1px solid white;
`;

export const Contact = styled.div`
  color: white;
  font-size: 1.3rem;
  margin-top: 4px;
`;

export const Phone = styled.a`
  color: white;
  margin: 10px 0 10px 0;
  font-size: 1.3rem;
`;

export const Copyright = styled.div`
  color: white;
  margin: 10px 0 10px 0;
`;
