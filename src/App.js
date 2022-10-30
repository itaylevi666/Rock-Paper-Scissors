/* eslint-disable default-case */
 
import { useState, useEffect } from 'react';

import { CardDescription, CardMeta, Message } from 'semantic-ui-react'
import { Button, Card, Image } from 'semantic-ui-react'

import './App.css';

function App() {

  const [userChoice, setUserChoice] = useState(null)
  const [computerChoise, setComputerChoise] = useState(null)
  const [result, setResult] = useState('Pick Your Weapon')
  const [compCounter, setCompCounter] = useState(0)
  const [userCounter, setUserCounter] = useState(0)
  const choises = ['rock','paper','scissors']


const handleClick = (value)  => {
  setUserChoice(value)
  generateComputerChoise()
}


const resetFunc = () =>{
  setCompCounter(0)
  setUserCounter(0)
  setResult('Pick Your Weapon')
  setUserChoice(null)
  setComputerChoise(null)
  
}

const generateComputerChoise = ()  => {
  const random = choises[Math.floor(Math.random() * choises.length)]
  setComputerChoise(random)
}

useEffect(()=> {
  checkResult()
},[computerChoise, userChoice])

  const checkResult = () => {
    switch (userChoice + computerChoise){
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
       setResult ('You Win')
       setUserCounter(userCounter +1 )
          break
          case 'paperscissors':
          case 'scissorsrock':
          case'rockpaper':
          setResult ('You  Loose')
          setCompCounter(compCounter +1 )
          
                break
                case 'rockrock':
                case 'scissorsscissors':
                case 'paperpaper':
                setResult('Its a Draw')
                break
    }
  }


  return (
    <div className="App">
 
      <Message warning>
      <Message color = 'blue'> User choise : {userChoice} </Message>
      <Message color ='red'> Computer choise : {computerChoise}</Message>
      <Card style={{margin: "auto"}}>
      <Card.Content>
      <Card.Header>{result}   </Card.Header>

        <CardDescription>      { choises.map(choise => 
     <Button primary onClick={()=>handleClick(choise) }>{choise}</Button>
     )}</CardDescription>
  
   
      </Card.Content>

      <Card.Content >
        <div className='ui two buttons'>
          <Button basic color='green'>
          {userCounter}
          </Button>
          <Button basic color='red'>
          {compCounter}
          </Button>

        </div>
      </Card.Content>
      <Button  floated='right' onClick={()=> {resetFunc()}}> Reset</Button>
    </Card>
  
  <h2> </h2>
  <h2> </h2>
  </Message>
    </div>
  );
}

export default App;
