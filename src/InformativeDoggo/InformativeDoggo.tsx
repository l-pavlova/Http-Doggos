import Doggo from "../Doggo/Doggo";
import { useState } from "react"
type IDoggoProps = { Doggo: typeof Doggo };

const InformativeDoggo = (dog: IDoggoProps) => {
    const [image, setImage] = useState<string>(dog.Doggo.prototype.img);

    return (
        <div className="Info-doggo">
            <img src={image}></img>
            <div id="status">
                <span id="description"></span>
            </div>
        </div>
    )
}

export default InformativeDoggo;