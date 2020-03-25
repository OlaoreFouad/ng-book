import { Metric } from './../models/metric.model';
import { AnalyticsImplementation } from './../factories/analytics.implementation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private analyticsImpl: AnalyticsImplementation) { }

  record(metric: Metric): void {
    this.analyticsImpl.record(metric);
  }
}
