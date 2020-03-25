import { AnalyticsImplementationModule } from './modules/analytics-implementation.module';
import { AnalyticsService } from './services/analytics.service';
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
    BrowserModule,
    AnalyticsImplementationModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://my-api.com/v1' }
    // { provide: AnalyticsService, useClass: AnalyticsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
