import { Component, ViewChild } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Task } from './task';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public tasks: Task[];

    @ViewChild('listTemp', { read: List }) myList: List;

    constructor(public navCtrl: NavController) {
        this.tasks = [
            { id: 1, title: 'Wash the dishes', isDone: false, isEdit: false },
            { id: 2, title: 'call mom', isDone: false, isEdit: false },
            { id: 3, title: 'eat dinner', isDone: false, isEdit: false }
        ];
    }

    addTask(title) {
        if (title) {
            this.tasks.push(new Task(title));
        }
    }

    editTask(task) {
        task.isEdit = !task.isEdit;
        this.myList.closeSlidingItems();
    }

    deleteTask(id) {
        this.tasks.splice(id, 1);
    }

    deleteSelected() {
        const newArray = [];
        this.tasks.forEach((task) => {
            if (!task.isDone) {
                newArray.push(task);
            }
        });
        this.tasks = newArray;
    }

}
