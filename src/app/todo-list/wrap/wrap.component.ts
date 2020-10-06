import { Component, OnInit, Output } from '@angular/core';
import { Itodo } from '../todo';
import { ToDoService } from '../todo-list.service';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})
export class WrapComponent implements OnInit {

  pageTitle = 'My TODO list';

  @Output() todoListOut: Itodo[] = [
    {
      id: '111aaa',
      taskDescription: "bla",
      completed: false,
      editable: false,
      dateCreated: new Date()
    },
    {
      id: 'b',
      taskDescription: "bla2",
      completed: false,
      editable: false,
      dateCreated: new Date()
    },
    {
      id: 'c3',
      taskDescription: "bla3",
      completed: false,
      editable: false,
      dateCreated: new Date()
    }
  ];

  @Output() completedListOut: Itodo[] = [];

  constructor(private service: ToDoService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    //for test only
    this.service.getTasks('5f7bbf81a9c111c0e75fbd96')
      .subscribe(data => {
        //this.tasks = data;
        console.log('tasks', data);
      }, err => console.log('error', err));
  }

  onSubmitClicked(newTask: Itodo) {
    this.todoListOut.push(newTask);
  }

  onCheckClicked(task: Itodo) {
    this.completedListOut.push(task);
    this.todoListOut.splice(this.todoListOut.indexOf(task), 1);
  }

  onUnCheckedClicked(task: Itodo) {
    this.todoListOut.push(task);
    this.completedListOut.splice(this.completedListOut.indexOf(task), 1);
  }

  onDeletingClicked(task: Itodo) {
    let index = this.completedListOut.indexOf(task);
    if (index !== -1) {
      this.completedListOut.splice(this.completedListOut.indexOf(task), 1);
    } else {
      this.todoListOut.splice(this.todoListOut.indexOf(task), 1);
    }
  }

  onUpdate(desc: string) {
    console.log(desc);
  }

}
