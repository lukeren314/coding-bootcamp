import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modules', component: ModulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
