import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  align-items: center;
  /* text-align: left; */
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 0;
  /* right: 0; */
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    transition: color 0.3s linear;

/*     &:hover {
      color: ${({ theme }) => theme.primaryHover};
    } */
  }
`;
