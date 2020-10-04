import { Component, OnInit, Output } from '@angular/core';
import { Itodo } from '../todo';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})
export class WrapComponent implements OnInit {

  pageTitle = 'My TODO list';

  @Output() todoListOut: Itodo[] = [
    {
      taskDescription : "bla",
      completed : false,
      editable: false
    },
    {
      taskDescription : "bla2",
      completed : false,
      editable: false
    },
    {
      taskDescription : "bla3",
      completed : false,
      editable: false
    }
  ];

  @Output() completedListOut: Itodo[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClicked(newTask: Itodo){
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
