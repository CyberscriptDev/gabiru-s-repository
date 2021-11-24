import styled from 'styled-components';

export const Field = styled.label`
  padding: 0.5rem;
  margin: 0px;
  width: 3rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #707174;
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }
`;