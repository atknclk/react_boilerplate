import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 50%;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 22px;
  border: 3px solid black;
  color: black;

  &:hover {
    border: 5px solid black;
    background: #000;
    color: #fff;
  }

  &:active {
    background: #black;
    color: #fff;
  }
`;

export default buttonStyles;
