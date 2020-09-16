import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextModule } from "primeng/inputtext";
import { CarService } from "./service";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import { LazyGridComponent } from './shared/control/lazy-grid/lazy-grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // in app module

@NgModule({
  declarations: [AppComponent, HomeComponent, LazyGridComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
