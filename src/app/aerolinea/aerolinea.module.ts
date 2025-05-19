import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaListComponent } from './aerolinea-list/aerolinea-list.component';
import { AerolineaDetailComponent } from './aerolinea-detail/aerolinea-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AerolineaListComponent, AerolineaDetailComponent],
  exports: [AerolineaListComponent, AerolineaDetailComponent]
})
export class AerolineaModule { }
