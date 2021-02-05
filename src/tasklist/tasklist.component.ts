import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  selector: "app-tasklist",
  templateUrl: "./tasklist.component.html",
  styleUrls: ["./tasklist.component.css"]
})
export class TasklistComponent implements OnInit {
  tasks: Task[];
  completedCount: number;
  constructor(private taskservice: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskservice.getTasks();
    this.completedCount = this.tasks.filter(f => f.isComplete).length;
  }
}
