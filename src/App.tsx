import images from './Doggo/mapImages';
import logo from './assets/logo.png';
import './App.css';
import Doggo from './Doggo/Doggo';
import readCodes from './helpers/getCodeMeaning';
import getImages from './Doggo/mapImages';
function App() {

  const imgs: any[] = getImages();
 
  const doges = readCodes();
  console.log(doges);

  const dogs = doges.map((dog, index) => {
    let model = dog;
    console.log(model);
    let img = imgs.find(i => i.includes(model.statusCode));
    console.log(dog);
    return (
    <Doggo img={img} statusCode={model.statusCode} statusText={model.statusText} description={model.description} key={dog.description}></Doggo>
  )});

  return (
    <div className="App">
      <div className="Nav">
        Dog lives matter
        <br/>
        <a
          className="App-link"
          href="https://github.com/l-pavlova?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
         View my spaghetti code
        </a></div>
      <header className="App-header">
        <h1><img src={logo} id="logo"></img>Http dogs!</h1>
        <hr className="solid"></hr>
        <span>All your status codes in one place, click on doggo to find explanation.</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, width: "80%", margin: 10 }}>
            {dogs}
        </div>
        
      </header>
      
    </div>
  );
}

export default App;