import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoListIn: Itodo[];
  @Input() completedListIn: Itodo[];

  constructor() { }

  ngOnInit(): void {
  }

}
