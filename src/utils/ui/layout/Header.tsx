import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-emerald-500">
      <nav className="flex h-12 max-w-5xl items-center font-bold text-white">
        <Link href="/" className="mr-auto flex h-inherit items-center px-5">
          Home
        </Link>
        <Link href="/category" className="mr-4 flex h-inherit items-center">
          カテゴリ一覧
        </Link>
      </nav>
    </header>
  );
};
