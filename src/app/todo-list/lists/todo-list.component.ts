import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoListIn: Itodo[];
  @Input() completedListIn: Itodo[];

  @Output() completedTask: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() uncompletedTask: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() deletedTask: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  editSaveButton = 'edit';

  // editedTask = '';
  // get taskEdit(): string {
  //   return this.editedTask;
  // }
  // set taskEdit(value: string) {
  //   if (value !== '' ) {
  //     this.editedTask = value; 
  //   }
  // }

  constructor() { }

  ngOnInit(): void { }

  // jumpLists(item: Itodo): void {

  //   console.log(item.taskDescription);

  //   item.completed = !item.completed;
  //   if (item.completed) {
  //     this.todoListIn.splice(this.todoListIn.indexOf(item), 1);  
  //     this.completedListIn.push(item);   
  //   } else {
  //     this.completedListIn.splice(this.completedListIn.indexOf(item), 1);  
  //     this.todoListIn.push(item);    
  //   }
  // }

  // deleteTask(item: Itodo) {     

  //   if (this.completedListIn.indexOf(item) !== -1) {
  //     this.completedListIn.splice(this.completedListIn.indexOf(item), 1);
  //   } else {
  //     this.todoListIn.splice(this.todoListIn.indexOf(item), 1)
  //   } 
  // }


  checkingTask(task: Itodo) {
    this.completedTask.emit(task);
  }

  uncheckingTask(task: Itodo) {
    this.uncompletedTask.emit(task);
  }

  deletingTask(task: Itodo) {
    this.deletedTask.emit(task);
  }

  
  editTask(item: Itodo) {
    if (item.editable) { //save
      this.editSaveButton = 'edit';
    } else {
      this.editSaveButton = 'save';
      console.log(this.todoListIn);
    }
    item.editable = !item.editable;
  }

  updateList(id: number, description: string, event: any) {
    this.update.emit(event);
  }
  
}

