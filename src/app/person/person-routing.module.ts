import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'create', component: CreateComponent },
  { path : 'edit', component: EditComponent },
  { path : 'list', component: ListComponent },
  { path : 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
