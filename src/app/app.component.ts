import { Component, VERSION } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  banner: string;
  txtwidth: string;
  c1: Boolean;
  c2: Boolean;
  c3: Boolean;
  constructor() {
    this.banner = "this is my first angular Aplication";
    this.txtwidth = "50";
    this.c1 = false;
    this.c2 = false;
    this.c3 = false;
  }
}
