// create a class to hold the todo object

export class Link {
    done: boolean = false;
    description: string;

    constructor(description?: string) {
        this.description = description;
    }
}