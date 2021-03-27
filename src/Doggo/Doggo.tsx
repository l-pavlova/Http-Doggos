import './Doggo.css'
import {useState} from 'react';

type DoggoProps = { img: string, statusCode: string, statusText: string, description: string };

const Doggo = ({ img, statusCode, statusText, description }: DoggoProps) => {
    const [image, setImage] = useState<string>(img);

    return (
        <div className="doggo">
            <div className="dog-img">
                <img src={image}></img>
               
            </div>
            <div className="footer">
            <a href={'/' + statusCode}>{statusCode}</a>
                <p>{statusText}</p>
            </div>
        </div>

    )
}

export default Doggo;
 //<RouteWithProps path={'/' + statusCode} component={InformativeDoggo} componentProps={{ image, statusCode, statusText, description}}/>{statusCode}
 //<h4>{statusCode}</h4>