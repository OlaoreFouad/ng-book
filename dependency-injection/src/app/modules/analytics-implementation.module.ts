import { Metric } from './../models/metric.model';
import { AnalyticsImplementation } from './../factories/analytics.implementation';
import { AnalyticsService } from './../services/analytics.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AnalyticsService,
      useFactory() {

        const loggingImplementation: AnalyticsImplementation = {
          record: (metric: Metric) => {
            console.log(`The metric is: \Name of Event: ${ metric.eventName } and from ${ metric.source }`);
          }
        };

        return new AnalyticsService(loggingImplementation);

      }
    }
  ]
})

export class AnalyticsImplementationModule {
}
