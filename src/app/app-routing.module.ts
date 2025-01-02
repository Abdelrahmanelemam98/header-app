import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CategorListComponent } from './categor-list/categor-list.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'card', component: CardComponent },
  { path: 'category', component: CategorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
