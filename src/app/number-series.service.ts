import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class NumberSeriesService {
  constructor() {}

  generateSeries(lb: number, ub: number): Observable<number> {
    return;
  }
}
