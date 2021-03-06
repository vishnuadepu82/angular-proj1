import { Injectable } from "@angular/core";
import { Task } from "./task";

@Injectable({ providedIn: "root" })
export class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = [
      { taskId: 1, task: "Pay Mobile Bills", isComplete: true },
      { taskId: 2, task: "Refill Petrol", isComplete: false },
      { taskId: 3, task: "Call Passport office", isComplete: false },
      { taskId: 4, task: "Call Linux call center", isComplete: false },
      { taskId: 5, task: "Bool train tickets", isComplete: true },
      { taskId: 6, task: "Get the Household goods", isComplete: false }
    ];
  }
  getTasks(): Task[] {
    return this.tasks;
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
  getTaskById(id: number): Task {
    return this.tasks.find(t => t.taskId == id);
  }
  markComplete(id: number) {
    this.tasks.find(t => t.taskId == id).isComplete = true;
  }
  unmarkComplete(id: number) {
    this.tasks.find(t => t.taskId == id).isComplete = false;
  }
}
