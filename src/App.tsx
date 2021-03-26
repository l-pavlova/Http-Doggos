import React from 'react';
import images from './Doggo/mapImages';
import logo from './assets/logo.png';
import './App.css';
import Doggo from './Doggo/Doggo';
import readCodes from './helpers/getCodeMeaning';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {

  const listItems = Object.values(images);
  const doges = readCodes();
  console.log(doges);

  const dogs = listItems.map((dog, index) => {
    let model = doges[index];
    console.log(model);

    console.log(dog);
    return (
    <Doggo img={dog} statusCode={model.statusCode} statusText={model.statusText} description={model.description} key={dog}></Doggo>
  )});

  return (
    <div className="App">
      <div className="Nav">Dog lives matter</div>
      <header className="App-header">
        <h1><img src={logo} id="logo"></img>Http dogs!</h1>
        <hr className="solid"></hr>
        <span>All your status codes in one place, click on doggo to find explanation.</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, width: "80%" }}>
            {dogs}
        </div>
        <a
          className="App-link"
          href="https://github.com/l-pavlova?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
         View my spaghetti code
        </a>
      </header>
    </div>
  );
}

export default App;