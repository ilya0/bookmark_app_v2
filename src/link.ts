// create a class to hold the link object

export class Link {
    done: boolean = false;
    description: string;
    description2: string;

    constructor(description?: string, description2?: string) {
        this.description = description;
        this.description2 = description;
    }
}