import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDemoInjectorComponent } from './user-demo-injector/user-demo-injector.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDemoInjectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
