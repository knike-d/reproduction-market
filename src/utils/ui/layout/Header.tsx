"use client";

import { useId } from "react";
import Link from "next/link";
import { Drawer } from "@/utils/ui/drawer/Drawer";
import { DrawerLinkItem } from "@/utils/ui/drawer/DrawerLinkItem";
import { useDrawer } from "@/utils/ui/drawer/useDrawer.hook";
import { HamburgerMenuIcon } from "@/utils/ui/icon/HamburgerMenuIcon";

export const Header = () => {
  const { isOpen, contentsRef, handleDrawerOpen, handleDrawerClose } = useDrawer();
  const id = useId();

  return (
    <header className="bg-emerald-500">
      <nav className="flex h-12 max-w-5xl items-center font-bold text-white">
        <Link href="/" className="mr-auto flex h-inherit items-center px-5">
          Home
        </Link>
        <button
          type="button"
          className="h-inherit px-4"
          onClick={handleDrawerOpen}
          aria-label="サイドメニューを開く"
          aria-expanded={isOpen}
          aria-controls={id}
        >
          <HamburgerMenuIcon />
        </button>
        <Drawer drawerContentsId={id} isOpen={isOpen} onClose={handleDrawerClose} ref={contentsRef}>
          <DrawerLinkItem href="/about">はじめての方へ</DrawerLinkItem>
          <DrawerLinkItem href="/category">カテゴリ一覧</DrawerLinkItem>
          <DrawerLinkItem href="/login">ログイン</DrawerLinkItem>
          <DrawerLinkItem href="/help">ヘルプ</DrawerLinkItem>
        </Drawer>
      </nav>
    </header>
  );
};
