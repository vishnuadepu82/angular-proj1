import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Task } from "../task";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input()
  taskDetails: Task;

  @Output()
  toggleStatus: EventEmitter<number>;

  constructor() {
    this.toggleStatus = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  btnClicked() {
    this.toggleStatus.emit(this.taskDetails.taskId);
  }
}
