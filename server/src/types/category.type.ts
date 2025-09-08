export interface CategoryType {
  id: number;
  name: string;
  slug: string;
  parent_id: number | null;
}

export type ConvertCategory = {
  id: number;
  name: string;
  slug: string;
  parent_id: number | null;
  children?: CategoryType[];
};


