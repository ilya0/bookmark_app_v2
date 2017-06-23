import { Todo } from './todo';

export class App {
    heading = "Bookmarks Saver";
    todos: Todo[] = [];
    todoDescription = '';

    addTodo() {
        if (this.todoDescription) {
            console.log("addtodo ran")
            // this.todos.push(new Todo(this.todoDescription));

            var testtodo = new Todo();
            testtodo.description = this.todoDescription;
            this.todos.push(testtodo);

            this.todoDescription = '';
        }
        console.log(this.todos);
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);

        }
    }

    givemedata(todo) {
        // alert(todo.description);
    }



}

