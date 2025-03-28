"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className="
        sticky top-0 z-50 w-full border-b border-border/40 bg-background/95
        backdrop-blur supports-[backdrop-filter]:bg-background/60
        animate-fadeSlideDown
      "
    >
      <div className="container mx-auto flex h-16 rounded-lg max-w-screen-2xl items-center justify-around">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href={`${pathname === "/palvelut" ? "/" : "palvelut"}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {pathname === "/palvelut" ? "Etusivu" : "Palvelut"}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href={`${pathname === "/palvelut" ? "/#about" : "#about"}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Yritys
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href={`${pathname === "/palvelut" ? "/#contact" : "#contact"}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Yhteystiedot
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
