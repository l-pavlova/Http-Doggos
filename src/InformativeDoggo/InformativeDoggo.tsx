import readCodes from "../helpers/getCodeMeaning";
import images from '../Doggo/mapImages';
import './InformativeDoggo.css'
const InformativeDoggo = (dog: any) => {

    const imgs = [];
    const vals = Object.values(images);
    for (let val of vals) {
        imgs.push(val);
    }
    const code = (dog.location.pathname).substr(1, 3);
    const doge = imgs.filter(i => i.includes(code))[0];
    console.log('in');
    console.log(code);
    const doggo = readCodes().filter(o => o.statusCode == code)[0];
    return (
        <div className="container">
            <div className="Info-doggo">
                <img src={doge} className="Dog pic"></img>
                <div id="status">{doggo.statusCode + ` ` + doggo.statusText}
                    <br></br>
                    <span id="description">{doggo.description}</span>
                </div>
            </div>
        </div>
    )
}

export default InformativeDoggo;