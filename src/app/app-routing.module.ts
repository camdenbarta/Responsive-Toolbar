import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveToolbarComponent } from './responsive-toolbar/responsive-toolbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full'},
  { path: 'nav', component: ResponsiveToolbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
