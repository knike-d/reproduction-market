import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-emerald-500">
      <nav className="relative m-auto flex max-w-5xl p-3 pl-5 font-bold text-white">
        <Link href="/" className="mr-5">
          Home
        </Link>
        <Link href="/category/" className="absolute right-4">
          カテゴリ一覧
        </Link>
      </nav>
    </header>
  );
};
