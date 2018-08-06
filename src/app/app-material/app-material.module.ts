import { NgModule } from '@angular/core';

import { MatToolbarModule, MatDialogModule, MatButtonModule,
  MatSidenavModule, MatSelectModule, MatIconModule,
  MatListModule, MatInputModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatFormFieldModule , MatBadgeModule ,MatDividerModule} from '@angular/material';



@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatDividerModule
  ]
})
export class AppMaterialModule {}
