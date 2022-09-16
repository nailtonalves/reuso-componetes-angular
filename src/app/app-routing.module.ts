import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiComponent } from './pages/components/pai/pai.component';

const routes: Routes = [
  {
  path: '',
    loadChildren: () => import('./pages/components/pai/pai.module').then(m => m.PaiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
