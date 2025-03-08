export type FilterType = {
  max: number;
  category: string;
};

export type ProductType = {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
};

export type FiltersProps = {
  filter: FilterType;
  onMaxValueChange: (value: number) => void;
  onCategoryChange: (value: string) => void;
};
