export default class DoggoModel {
    statusCode: string;
    statusText: string;
    description: string;

    constructor(statusCode: string, statusText: string, description: string) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.description = description;
    }
}