import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportPivotComponent } from './export-pivot/export-pivot.component';
import { GridViewExportComponent } from './grid-view-export/grid-view-export.component';
import { GridViewComponent } from './grid-view/grid-view.component';

const routes: Routes = [
  {
    path: 'grid-view',
    component: GridViewComponent,
  },
  {
    path: 'grid-view-export',
    component: GridViewExportComponent,
  },
  {
    path: 'pivot-view-export',
    component: ExportPivotComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
