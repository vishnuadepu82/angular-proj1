import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoanFormComponent } from "./loan-form/loan-form.component";
import { LoanService } from "./loan.service";
import { BuiltInPipesComponent } from "../built-in-pipes/built-in-pipes.component";
import { InWordsPipe } from "./in-words.pipe";
import { StructuralDirectivesDemoComponent } from "../structural-directives-demo/structural-directives-demo.component";
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { Routes, RouterModule } from "@angular/router";
import { TaskmanagerComponent } from "../taskmanager/taskmanager.component";
import { TaskService } from "../task.service";

const routes: Routes = [
  { path: "", redirectTo: "/loan", pathMatch: "full" },
  { path: "loan", component: LoanFormComponent },
  { path: "pipes", component: BuiltInPipesComponent },
  { path: "sddc", component: StructuralDirectivesDemoComponent },
  { path: "tasks", component: TaskmanagerComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    LoanFormComponent,
    BuiltInPipesComponent,
    InWordsPipe,
    StructuralDirectivesDemoComponent,
    MenuBarComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoanService, TaskService]
})
export class AppModule {}
