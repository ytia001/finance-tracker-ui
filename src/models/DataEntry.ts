import { Category } from '../constants/Category';

export interface DataEntry {
  id: number;
  amount: string;
  date: number;
  category: Category;
}
