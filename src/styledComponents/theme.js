// ./src/styledComponents/theme.js
import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 25px;
  background-image: linear-gradient(116deg, #08aeea 0%, #2af598 100%);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-family: sans-serif;
  filter: ${({ disabled }) => disabled ? 'grayscale(1)' : 'hue-rotate(0deg)'};
  transition: filter 300ms linear;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

  &:focus,
  &:hover {
    filter: ${({ disabled }) => !disabled && 'hue-rotate(45deg)'};
  }
`

export default Button
