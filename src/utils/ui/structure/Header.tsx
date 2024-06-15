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
        <Link className="mr-auto flex h-inherit items-center px-5" href="/">
          Home
        </Link>
        <button
          aria-controls={id}
          aria-expanded={isOpen}
          aria-label="サイドメニューを開く"
          className="h-inherit px-4"
          type="button"
          onClick={handleDrawerOpen}
        >
          <HamburgerMenuIcon />
        </button>
        <Drawer ref={contentsRef} drawerContentsId={id} isOpen={isOpen} onClose={handleDrawerClose}>
          <DrawerLinkItem href="/about">はじめての方へ</DrawerLinkItem>
          <DrawerLinkItem href="/category">カテゴリ一覧</DrawerLinkItem>
          <DrawerLinkItem href="/login">ログイン</DrawerLinkItem>
          <DrawerLinkItem href="/help">ヘルプ</DrawerLinkItem>
        </Drawer>
      </nav>
    </header>
  );
};
