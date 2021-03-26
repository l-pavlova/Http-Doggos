import DoggoModel from './doggoModel';
import codes from './stats.json'

export default function readCodes() {
    const codeArray = [];
    for(let i of codes) {
        codeArray.push(new DoggoModel(i.code,i.phrase, i.description))
    }
    return codeArray;
}