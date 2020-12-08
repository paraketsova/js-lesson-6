import styled from 'styled-components';
const ButtonStyled = styled.button`
  padding: 1rem 1.6rem;
  background: ${props => props.sweden ? 'blue' : 'black'};
  color: ${props => props.sweden ? 'yellow' : 'white'};

  &:hover {
    background:white;
    color: black
  }
`

export {ButtonStyled}