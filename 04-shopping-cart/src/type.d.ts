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

export type AddToCart = {
  type: "Add";
  product: ProductType;
};

export type RemoveItem = {
  type: "Remove";
  id: number;
};

export type ClearCart = {
  type: "Clear";
};

export type UpdateQuantity = {
  type: "Update";
  id: number;
};

export type ActionType = AddToCart | RemoveItem | ClearCart | UpdateQuantity;
