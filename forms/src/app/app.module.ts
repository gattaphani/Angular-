import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CrudComponent } from './crud/crud.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { PostComponent } from './post/post.component';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';




    

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveformComponent,
    CrudComponent,
    FormreactiveComponent,
    PostComponent,
    ReactiveExampleComponent,
    ChildComponent,
    ParentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
