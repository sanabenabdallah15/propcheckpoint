import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

function Player({el}) {
    const {name,nationality,number,age,image}=el
    const playerName = name || 'No define';
    const playerNationality=nationality|| 'No define';
    const playerNumber=number|| 'No define';
    const playerAge=age|| 'No define';
    const playerImage=image|| 'No define';
    const button ={
        backgroundColor:'#00A9FF',
        borderRadius:'7%',
        borderStyle:'none',
        marginLeft:'20%'

    }
    
  return (
    <>
 
    <div className="inline">
    <Card style={{ width: '18rem' }}>
      <img src={playerImage} alt=""/>
      <Card.Body>

        <h1 style={{color:'#3876BF',size:300,textAlign:'center'}}>{playerName}</h1>
        <h3 style={{color:'#190482'}}>{playerNationality}</h3>
        <h3 style={{color:'#190482'}}>{playerNumber}</h3>
        <h3 style={{color:'#190482'}}>{playerAge}</h3>
      

        <Button variant="primary" style={button} className='button'>Add to collection</Button>
      </Card.Body>
    </Card>
  
   
    </div>

    </>
  );

}


export default Player;