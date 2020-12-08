import React from 'react';
import './App.css';
import styled, {keyframes} from 'styled-components';
import MyButton from './components/Button'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`


const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  //animation: ${rotate} 5s linear infinite;
`

const Wrapper = styled.div`
  padding: 5rem;
  background-color: #F1F1F1;  
`

const Button = styled.button`
  color: ${props => props.color || 'black'};
  background: palevioletred;
  padding: ${props => props.primary ? '1.5rem 3rem': '1rem 1.5rem'};
  font-weight: ${props => props.primary ? '800': '400'};
`

const ButtonSecondary = styled(Button)`
  background: tomato;
`


function App() {
  return (
    <div>
      <Wrapper>
        <Heading>This is a styled Heading</Heading>
        <Button>Styled button</Button>
        <Button color='blue' primary={true}>Primary Button</Button>
        <ButtonSecondary>Secondary button</ButtonSecondary>
        <MyButton />
        <MyButton sweden />

      </Wrapper>
      
    </div>
  );
}

export default App;
