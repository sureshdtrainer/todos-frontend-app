import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path:'public', component:PublicComponent, children:[
    {path:'all-todos', component: AllTodosComponent},
    {path:'todo-details', component: TodoDetailsComponent},
    {path: 'home', component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
