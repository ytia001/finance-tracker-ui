import { Component, Input, OnInit } from '@angular/core';
import { AbstractChartComponent, AbstractDatapoint } from '../abstract-chart';
import { DashboardData } from '../../dashboard.component';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartGroupBy } from '../../../../../constants/Chart';
import { DataEntry } from '../../../../../models/DataEntry';

@Component({
  selector: 'app-bar-chart',
  imports: [BaseChartDirective],
  templateUrl: './BarChart.component.html',
  styleUrl: './BarChart.component.scss',
})
export class BarChartComponent extends AbstractChartComponent<'bar'> implements OnInit {
  @Input()
  inputData!: DashboardData;

  groupBy: ChartGroupBy = ChartGroupBy.MONTH;

  chartType = 'bar' as const;

  override parseData(data: DashboardData): ChartData<'bar'> {
    const categoryMap = new Map<string, number>();

    data.rawData.forEach((entry) => {
      const key = this.getGroupKey(entry, this.groupBy);
      categoryMap.set(key, (categoryMap.get(key) || 0) + Number(entry.amount));
    });

    // Labels and values
    const labels = Array.from(categoryMap.keys());
    const values: AbstractDatapoint = Array.from(categoryMap.values());

    return {
      labels: labels,
      datasets: [
        {
          label: 'Expenditure',
          data: values,
        },
      ],
    };
  }

  ngOnInit(): void {
    this.setData(this.inputData);
  }

  get chartOptions(): ChartOptions<'bar'> {
    return {
      responsive: true,
      animation: {
        duration: 2000,
        easing: 'easeOutQuart',
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Expenditure Bar Chart',
        },
      },
    };
  }

  private getGroupKey(data: DataEntry, chartGroupBy: ChartGroupBy): string {
    if (chartGroupBy === ChartGroupBy.Category) {
      return data.category;
    } else {
      const dateObj = new Date(data.date);
      const y = dateObj.getFullYear();
      const m = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      const d = dateObj.getDate().toString().padStart(2, '0');

      if (chartGroupBy === ChartGroupBy.YEAR) return `${y}`;
      if (chartGroupBy === ChartGroupBy.MONTH) return `${y}-${m}`;
      if (chartGroupBy === ChartGroupBy.DAY) return `${d}-${m}-${y}`;
    }
    return '';
  }
}
