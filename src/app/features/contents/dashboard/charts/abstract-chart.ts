import { ChartData, ChartType } from 'chart.js';
import { DashboardData } from '../dashboard.component';

/** Represents a single data point for a chart. */
export type AbstractDatapoint = number[] | { x: number; y: number; r?: number }[];

// export type AbstractChartDataSet = Omit<ChartDataset, 'data'>[];

// export interface AbstractChartData {
//   chartType: ChartType;
//   labels: string[];
//   data: AbstractDatapoint;
//   dataset: AbstractChartDataSet;
// }

export abstract class AbstractChartComponent<T extends ChartType> {
  // chartData!: AbstractChartData;
  protected dataSet!: ChartData<T>;

  abstract parseData(data: DashboardData): ChartData<T>;
  // abstract getConfig(): ChartOptions;

  public setData(data: DashboardData): void {
    if (!data) {
      this.dataSet = { labels: [], datasets: [] };
      return;
    }
    this.dataSet = this.parseData(data);
  }
}
