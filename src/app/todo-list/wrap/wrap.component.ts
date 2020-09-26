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
      todoId : 1,
      todoTitle : "bla",
      completed : false
    },
    {
      todoId : 2,
      todoTitle : "bla2",
      completed : false
    }
  ];

  @Output() completedListOut: Itodo[] = [
    {
      todoId : 3,
      todoTitle : "bla3",
      completed : false
    },
    {
      todoId : 4,
      todoTitle : "bla4",
      completed : false
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
