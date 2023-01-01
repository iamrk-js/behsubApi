import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BSubjectComponent } from './components/b-subject/b-subject.component';
import { RSubjectComponent } from './components/r-subject/r-subject.component';
import { ConsumerComponent } from './components/consumer/consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BSubjectComponent,
    RSubjectComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
