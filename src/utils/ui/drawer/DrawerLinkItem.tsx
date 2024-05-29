import { useContext, type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
import { DrawerContext } from "@/utils/ui/drawer/Drawer";

type Props = {
  href: NonNullable<ComponentProps<"a">["href"]>;
  children: ReactNode;
};

export const DrawerLinkItem = ({ children, ...props }: Props) => {
  const { isOpen } = useContext(DrawerContext);
  return (
    <Link className="block w-full p-4" tabIndex={isOpen ? 0 : -1} {...props}>
      {children}
    </Link>
  );
};
