import Doggo from "../Doggo/Doggo";
import { useState } from "react"

type InfoDoggoProps = { img: string, statusCode: string, statusText: string, description: string };
const InformativeDoggo = (dog: InfoDoggoProps) => {

    const [image, setImage] = useState<string>(dog.img);

    return (
        <div className="container">
            <div className="Info-doggo">
                <img src={image}></img>
                <div id="status">{dog.statusCode + ` ` + dog.statusText}
                    <br>
                        <span id="description">{dog.description}</span>
                    </br>
                </div>
            </div>
        </div>
    )
}

export default InformativeDoggo;