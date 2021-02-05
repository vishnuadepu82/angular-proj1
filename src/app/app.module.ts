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

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoanFormComponent,
    BuiltInPipesComponent,
    InWordsPipe,
    StructuralDirectivesDemoComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoanService]
})
export class AppModule {}
