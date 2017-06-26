import { Link } from './link';

export class App {
    heading = "Links Saver";
    links: Link[] = [];
    linkDescription = '';
    linkDescription2 = '';


    //adds the
    addLink() {

        if (this.linkDescription) {
            console.log("add todo ran")
            // this.links.push(new Todo(this.linkDescription));

            var item = new Link();
            item.description = this.linkDescription;
            item.description2 = this.linkDescription2
            this.links.push(item);

            this.linkDescription = '';
            this.linkDescription2 = '';
        }
        console.log(this.links);
    }

    removeLink(todo) {
        let index = this.links.indexOf(todo);
        if (index !== -1) {
            this.links.splice(index, 1);

        }
    }

    givemedata(todo) {
        // alert(todo.description);
    }



}

