import React from 'react';
import images from './Doggo/mapImages';
import logo from './assets/logo.png';
import './App.css';
import getDoggoCode from './helpers/getDogCode'
import Doggo from './Doggo/Doggo';
import readCodes from './helpers/getCodeMeaning';

function App() {

  const listItems = Object.values(images);
  const codes = readCodes();
  console.log(codes);
  
  const dogs = listItems.map((dog, index) => {
    let code = getDoggoCode(dog);
    let meaning = codes[index];
    console.log(meaning);
    
    
    console.log(dog);
    if(code.match(/^\d+$/)){
        return <Doggo img={dog} statusCode={code} statusText={meaning.phrase} key={dog}></Doggo>
    } 
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} id="logo"></img>Http dogs!</h1>
        <hr className="solid"></hr>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, width:"80%" }}>
          {dogs}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;