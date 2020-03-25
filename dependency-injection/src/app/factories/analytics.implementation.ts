import { Metric } from './../models/metric.model';
export interface AnalyticsImplementation {

  record(metric: Metric): void;

}
