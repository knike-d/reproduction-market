import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/utils/ui/accordion/Accordion";

const houseCleaningCategories = [
  { name: "エアコンクリーニング", slug: "aircon" },
  { name: "レンジフード（換気扇）クリーニング", slug: "fan" },
  { name: "洗濯機（洗濯槽）クリーニング", slug: "washer" },
  { name: "水回りクリーニング", slug: "water-cleaning" },
  { name: "ハウスクリーニング", slug: "house" },
  { name: "キッチンクリーニング", slug: "kitchen" },
];
const renovationCategories = [
  { name: "壁紙・クロスのリフォーム", slug: "wallpaper" },
  { name: "網戸張替え", slug: "screen" },
  { name: "畳張替え（表替え）", slug: "tatami" },
];
const largeCategories = [
  { name: "ハウスクリーニング", children: houseCleaningCategories },
  { name: "リフォーム", children: renovationCategories },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Image src="/480x360.png" alt="TOP画像" className="mb-6 mt-4" width={480} height={360} priority />

      <h2 className="mb-2 ml-6 mr-auto text-lg font-bold">人気のカテゴリ</h2>
      <div className="mb-7 flex flex-wrap justify-center gap-5">
        {houseCleaningCategories.map((el) => (
          <div className="w-1/4" key={el.slug}>
            <Image src="/480x360.png" alt={el.name} width={480} height={360} priority />
            <span className="text-sm font-bold">{el.name}</span>
          </div>
        ))}
      </div>
      <h2 className="mb-2 ml-6 mr-auto text-lg font-bold">カテゴリから探す</h2>
      <ul className="w-full text-left text-lg">
        {largeCategories.map((category) => (
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
}
