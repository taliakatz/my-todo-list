import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Itodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  editedTask = '';
  closeResult: string;

  @Input() todoListIn: Itodo[];
  @Input() completedListIn: Itodo[];

  @Output() completedTask: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() uncompletedTask: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() deletedTask: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  checkingTask(task: Itodo) {
    this.completedTask.emit(task);
  }

  uncheckingTask(task: Itodo) {
    this.uncompletedTask.emit(task);
  }

  deletingTask(task: Itodo) {
    this.deletedTask.emit(task);
  }
  
  openModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-edit-task'}).result.then(
      (item: Itodo) => {
        item.taskDescription = this.editedTask;
        this.editedTask = ''; 
      },
      (reason) => this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    );
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

