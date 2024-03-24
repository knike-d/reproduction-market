import useSWR from "swr";
import type { CategoryModel } from "@/models/category/category.type";
import type { SWRConfiguration } from "swr";

export const useFetchCategory = (config?: SWRConfiguration) => useSWR<CategoryModel>("/api/category/", config);
