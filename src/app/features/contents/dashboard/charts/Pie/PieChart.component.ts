import { Component, Input, OnInit } from '@angular/core';
import { AbstractChartComponent, AbstractDatapoint } from '../abstract-chart';
import { DashboardData } from '../../dashboard.component';
import { Category } from '../../../../../../constants/Category';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import chroma from 'chroma-js';

@Component({
  selector: 'app-pie-chart',
  imports: [BaseChartDirective],
  templateUrl: './PieChart.component.html',
  styleUrl: './PieChart.component.scss',
})
export class PieChartComponent extends AbstractChartComponent<'pie'> implements OnInit {
  @Input()
  inputData!: DashboardData;

  chartType = 'pie' as const;

  override parseData(data: DashboardData): ChartData<'pie'> {
    const categoryMap = new Map<Category, number>();

    data.rawData.forEach((entry) => {
      const value = Number(entry.amount);
      categoryMap.set(entry.category, (categoryMap.get(entry.category) || 0) + value);
    });

    // Labels and values
    const labels = Array.from(categoryMap.keys());
    const values: AbstractDatapoint = Array.from(categoryMap.values());

    // Optional: background colors
    const backgroundColors = chroma.scale('Set2').colors(labels.length);

    return {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: backgroundColors.slice(0, labels.length),
        },
      ],
    };
  }

  ngOnInit(): void {
    this.setData(this.inputData);
  }

  get pieChartOptions(): ChartOptions<'pie'> {
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
      },
      cutout: '50%',
    };
  }
}
