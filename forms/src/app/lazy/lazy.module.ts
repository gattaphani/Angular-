import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



const routes: Routes = [
  { path:'', component:ListComponent },
  { path:'child', component:ChildComponent },
  { path:'parent', component:ParentComponent },
  
];
@NgModule({
  declarations: [
    ListComponent, 
    ParentComponent, 
    ChildComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    ParentComponent,
    ChildComponent
  ],
  
})
export class LazyModule { }
