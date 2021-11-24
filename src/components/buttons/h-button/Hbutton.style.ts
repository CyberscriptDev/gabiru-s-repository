import styled from 'styled-components';

interface IButton {
  isOutlined?: boolean,
  backgroundColor?: string,
}

export const Button = styled.button<IButton>`
  border: solid gray 0.1em;
  border-radius: 0.3em;
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'white' };
  padding: 1px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
`;