import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

type Props = {
  href: NonNullable<ComponentProps<"a">["href"]>;
  children: ReactNode;
};

export const DrawerLinkItem = ({ children, ...props }: Props) => {
  return (
    <Link {...props} className="block w-full p-4">
      {children}
    </Link>
  );
};
