import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: #4193cb;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 35px 0;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: #808080;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #4193cb;
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  pointer-events: none;
  letter-spacing: 1px;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles};
  }
`;
