import './Doggo.css'

import { RouteWithProps } from '../helpers/routerWithProps'
import React, { useState } from 'react';
import InformativeDoggo from '../InformativeDoggo/InformativeDoggo'
import DoggoModel from '../helpers/doggoModel';
type DoggoProps = { img: string, statusCode: string, statusText: string, description: string };

const Doggo = ({ img, statusCode, statusText, description }: DoggoProps) => {
    const [image, setImage] = useState<string>(img);

    return (
        <div className="doggo">
            <div className="dog-img">
                <img src={image}></img>
            </div>
            <div id="status">
                <a href={'/' + statusCode}>{statusCode}</a>
                <p>{statusText}</p>
            </div>
        </div>

    )
}

export default Doggo;
 //<RouteWithProps path={'/' + statusCode} component={InformativeDoggo} componentProps={{ image, statusCode, statusText, description}}/>{statusCode}
 //<h4>{statusCode}</h4>