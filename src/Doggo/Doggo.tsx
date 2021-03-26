import './Doggo.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import InformativeDoggo from '../InformativeDoggo/InformativeDoggo'
type DoggoProps = { img: string, statusCode:string,  statusText:string, description:string};

const Doggo = ({ img, statusCode, statusText, description }: DoggoProps) => {
    const [image, setImage] = useState<string>(img);

    return (
        <div className="doggo">
            <img src={image}></img>
            <div id="status">
            <h4><Route path={'/' + statusCode} component={InformativeDoggo}/>{statusCode}</h4>
            <p>{statusText}</p>
            </div>
        </div>
    )
}

export default Doggo;