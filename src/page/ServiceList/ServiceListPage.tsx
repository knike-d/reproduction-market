"use client";
import { notFound } from "next/navigation";
import { useFetchCategory } from "@/model/category/useFetchCategory";
import { AreaSearchForm } from "@/model/service/SearchForm/AreaSearchForm";

export type ServiceListPageProps = {
  params: { serviceSlug: string };
};

export const ServiceListPage = ({ params }: ServiceListPageProps) => {
  const { data } = useFetchCategory();
  const largeCategory = data.categories.find((el) => el.children.some((el) => el.slug === params.serviceSlug));
  const category = largeCategory?.children.find((el) => el.slug === params.serviceSlug);
  if (!category) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="mb-4 ml-4 mr-auto mt-6 text-lg font-bold">{category.name}</h1>
      <AreaSearchForm />
    </main>
  );
};
