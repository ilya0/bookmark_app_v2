// create a class to hold the todo object

export class Todo {
    done: boolean = false;
    description: string;

    constructor(description?: string) {
        this.description = description;
    }
}