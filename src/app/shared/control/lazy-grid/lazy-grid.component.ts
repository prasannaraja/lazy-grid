import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { Column } from "src/app/models/column";
import { Car, CarService } from "../../../service";

@Component({
  selector: "app-lazy-grid",
  templateUrl: "./lazy-grid.component.html",
  styleUrls: ["./lazy-grid.component.css"],
})
export class LazyGridComponent implements OnInit, OnDestroy {
  @Input() columns: Column[];
  @Input() value$: Observable<any>;

  cars: Car[];
  cols: any[];
  _selectedColumns: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCarsSmall().then((cars) => (this.cars = cars));

    this.cols = [
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" },
    ];

    this._selectedColumns = this.cols;
  }

  ngOnDestroy() {}

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
    console.log(this._selectedColumns);
  }
}
