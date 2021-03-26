import fs from 'fs'

export default function readCodes() {
    fs.readFile('./statusCodes.txt', 'utf8', function (err, buffer) {
        console.log("buffer")
        console.log(buffer)
    });
}