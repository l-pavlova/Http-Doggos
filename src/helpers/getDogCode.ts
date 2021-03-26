export default function getDoggoCode(dog: string){
    let startIndex: number = dog.indexOf('doggo') + 5;
    return dog.substr(startIndex, 3);
}