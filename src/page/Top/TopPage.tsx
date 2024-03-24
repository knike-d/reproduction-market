"use client";
import Image from "next/image";
import Link from "next/link";
import { useFetchCategory } from "@/model/category/useFetchCategory";
import { Accordion } from "@/utils/ui/accordion/Accordion";
import { Spinner } from "@/utils/ui/loading/Spinner";

export const TopPage = () => {
  const { data } = useFetchCategory();

  return (
    <main className="flex flex-col items-center justify-between">
      <Image src="/480x360.png" alt="TOP画像" className="mb-6 mt-4" width={480} height={360} priority />

      <h2 className="mb-2 ml-6 mr-auto text-lg font-bold">人気のカテゴリ</h2>
      <div className="mb-7 flex flex-wrap justify-center gap-5">
        {data?.categories[0]?.children.map((el) => (
          <div className="w-1/4" key={el.slug}>
            <Image src="/480x360.png" alt={el.name} width={480} height={360} priority />
            <span className="text-sm font-bold">{el.name}</span>
          </div>
        ))}
      </div>
      <h2 className="mb-2 ml-6 mr-auto text-lg font-bold">カテゴリから探す</h2>
      <ul className="w-full text-left text-lg">
        {data?.categories.map((category) => (
          <li key={category.name}>
            <Accordion title={category.name}>
              <ul className="bg-gray-200 pl-10 text-sm">
                {category.children.map((el) => (
                  <li className="flex h-12 items-center" key={el.slug}>
                    <Link href={`/${el.slug}`}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          </li>
        ))}
      </ul>
    </main>
  );
};

const Fallback = () => <Spinner></Spinner>;
TopPage.Fallback = Fallback;
