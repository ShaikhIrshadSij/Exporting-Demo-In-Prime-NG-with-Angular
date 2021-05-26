import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridViewComponent } from './grid-view/grid-view.component';
import { PrimengModule } from './primeng.module';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { GridViewExportComponent } from './grid-view-export/grid-view-export.component';
import { ExportPivotComponent } from './export-pivot/export-pivot.component';

@NgModule({
  declarations: [AppComponent, GridViewComponent, GridViewExportComponent, ExportPivotComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
