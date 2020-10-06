import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itodo } from '../todo'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() task: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  _taskInput = '';
  get taskInput(): string {
    return this._taskInput;
  }
  set taskInput(value: string) {
    if (value === '') {
      return;
    }

    this._taskInput = value;
  }

  onSubmitTask() {
    if (this._taskInput !== '') {
      this.task.emit({
        taskDescription: this._taskInput,
        completed: false,
        editable: false,
        dateCreated: new Date(),
        id: '1'
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
