import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CrudComponent } from './crud/crud.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { PostComponent } from './post/post.component';
// import {LazyModule} from './lazy/lazy.module'
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
//import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';

const routes: Routes = 

[

  //   {path:'',
  // redirectTo:'/home',
  // pathMatch:'full'
  
  // },
  
    {
      path:"Register",
      component:TemplateformComponent,
    },
  {
    path:"Reactive",
    component:ReactiveformComponent,
  },
  {
    path:"Reactiveform",
    component:FormreactiveComponent,
  },
  {
    path:"crud",
    component:CrudComponent
  },
  {
    path:"post/:id",
    component:PostComponent
  },
  {
    path:"child",
    component:ChildComponent
  },
  {
    path:"parent",
    component:ParentComponent
  },

  {
    path:"list",
    loadChildren: './lazy/lazy.module#LazyModule' 
  },
  
      ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
