import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AerolineaListComponent } from './aerolinea/aerolinea-list/aerolinea-list.component';
import { AerolineaDetailComponent } from './aerolinea/aerolinea-detail/aerolinea-detail.component';

const routes: Routes = [
  { path: '', component: AerolineaListComponent },
  { path: 'aerolinea/:id', component: AerolineaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
