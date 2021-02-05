import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoanFormComponent } from "./loan-form/loan-form.component";
import { LoanService } from './loan.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, LoanFormComponent],
  bootstrap: [AppComponent],
  providers: [LoanService]
})
export class AppModule {}
