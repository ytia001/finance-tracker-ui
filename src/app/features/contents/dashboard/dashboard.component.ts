import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DataEntry } from '../../../models/DataEntry';
import { DashboardConfiguration } from '../../../models/Configuration';
import { Category } from '../../../constants/Category';
import { PieChartComponent } from './charts/Pie/PieChart.component';
import { LineChartComponent } from './charts/Line/LineChart.component';
import { BarChartComponent } from './charts/Bar/BarChart.component';

export interface DashboardData {
  dashboardConfiguration: DashboardConfiguration;
  rawData: DataEntry[];
}

@Component({
  selector: 'app-dashboard',
  imports: [MatExpansionModule, PieChartComponent, LineChartComponent, BarChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // TODO: remove once backend data is realized
  get dummyDashboardData(): DashboardData {
    return {
      dashboardConfiguration: {
        charts: ['pie', 'line'],
      },
      rawData: [
        {
          id: 1,
          amount: '200',
          date: Date.now(),
          category: Category.GIFTS,
        },
        {
          id: 2,
          amount: '150',
          date: new Date('2025-12-01').getTime(),
          category: Category.FOOD_AND_BEVERAGE,
        },
        {
          id: 3,
          amount: '100',
          date: new Date('2025-11-01').getTime(),
          category: Category.OTHERS,
        },
        {
          id: 4,
          amount: '15',
          date: new Date('2025-07-01').getTime(),
          category: Category.OTHERS,
        },
      ],
    };
  }

  //
}
