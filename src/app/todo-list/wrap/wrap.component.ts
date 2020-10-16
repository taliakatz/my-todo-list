import { Component, OnInit, Output } from '@angular/core';
import { Itodo } from '../todo';
import { WrapService } from './wrap.service';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})
export class WrapComponent implements OnInit {

  pageTitle = 'My TODO list';
  errorMessage = '';
  @Output() todoListOut: Itodo[] = [];
  @Output() completedListOut: Itodo[] = [];
  
  constructor(private wrapService: WrapService) { }

  ngOnInit(): void {
    this.wrapService.getTasksTodo().subscribe({
      next: tasks => this.todoListOut = tasks,
      error: err => this.errorMessage = err  
    });
  }

  onSubmitClicked(newTask: Itodo): void {
    this.todoListOut.push(newTask); 
  }

  onCheckClicked(task: Itodo): void {
    this.completedListOut.push(task);
    this.todoListOut.splice(this.todoListOut.indexOf(task), 1);
  }

  onUnCheckedClicked(task: Itodo): void {
    this.todoListOut.push(task);
    this.completedListOut.splice(this.completedListOut.indexOf(task), 1);
  }
  
  onDeletingClicked(task: Itodo): void {
    let index = this.completedListOut.indexOf(task);
    if (index !== -1) {
      this.completedListOut.splice(this.completedListOut.indexOf(task), 1);
    } else {
      this.todoListOut.splice(this.todoListOut.indexOf(task), 1);
    }
  }
}
