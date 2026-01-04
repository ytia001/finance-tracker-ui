export enum Category {
  FOOD_AND_BEVERAGE = 'food_and_beverage',
  GROCERIES = 'groceries',
  INCOME = 'income',
  TRANSPORT = 'transport',
  GIFTS = 'gifts',
  ELECTRICAL_APPLIANCES = 'electrical_appliances',
  OTHERS = 'others',
}

export const CategoryOptions: Record<Category, string> = {
  [Category.FOOD_AND_BEVERAGE]: 'Food and Beverage',
  [Category.GROCERIES]: 'Groceries',
  [Category.INCOME]: 'Income',
  [Category.TRANSPORT]: 'Transport',
  [Category.GIFTS]: 'Gifts',
  [Category.ELECTRICAL_APPLIANCES]: 'Electrical Appliances',
  [Category.OTHERS]: 'Others',
};
