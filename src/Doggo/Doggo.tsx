import './Doggo.css'
import { useState } from 'react';

type DoggoProps = { img: string, statusCode:string,  statusText:string};

const Doggo = ({ img, statusCode, statusText }: DoggoProps) => {
    const [image, setImage] = useState<string>(img);

    return (
        <div className="doggo">
            <img src={image}></img>
            <div id="status">
            <h4><b><a
            className="App-link"
            href="https://reactjs.org"
            target="_blank">{statusCode}</a></b></h4>
            <p>{statusText}</p>
            </div>
        </div>
    )
}

export default Doggo;