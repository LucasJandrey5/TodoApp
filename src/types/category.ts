export interface category {
  id: number;
  title: string;
  colorHEX: string;
  secondaryColorHEX: string;
  icon: string;
}

export type CategoryContextType = {
  categories: category[];
  CreateCategory: (category: category) => void;
};
