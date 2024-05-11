export type Category = { name: string; slug: string };
export type LargeCategory = { name: string; children: Category[] };

export type CategoryModel = {
  categories: LargeCategory[];
};
