import { NextResponse } from "next/server";

export const GET = async () => {
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

  const categoryModel = {
    categories: largeCategories,
  };

  return NextResponse.json(categoryModel, { status: 200 });
};
