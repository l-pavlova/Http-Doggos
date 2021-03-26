import { useState } from "react"
import logo from './assets/logo.png';
import './App.css';

const Home = (doges: any) => {
    const [dogs, setDogs] = useState(doges);
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
        </div>)
}

export default Home;