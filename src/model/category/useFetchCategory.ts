import type { CategoryModel } from "@/model/category/category.type";

export const useFetchCategory = () => {
  const url = "/api/category";
  return useSuspenseQuery<CategoryModel>({
    queryKey: [url],
  });
};
