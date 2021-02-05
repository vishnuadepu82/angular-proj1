import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  selector: "app-addtask",
  templateUrl: "./addtask.component.html",
  styleUrls: ["./addtask.component.css"]
})
export class AddtaskComponent implements OnInit {
  task: Task;
  constructor(private taskservice: TaskService, private router: Router) {
    this.task = new Task();
  }

  ngOnInit() {}
  addtask() {
    this.taskservice.addTask(this.task);
    this.router.navigateByUrl("/tasks/list");
  }
}
