import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  links: string[][];
  constructor() {
    this.links = [
      ["/loan", "Loan Form"],
      ["/pipes", "Pipes Demo"],
      ["/sddc", "Structural Directives Demo"],
      ["/tasks", "Tasks"]
    ];
  }

  ngOnInit() {}
}
