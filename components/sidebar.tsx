"use client";

import Image from "next/image";
import Link from "next/link";

import { Chakra_Petch } from "next/font/google";
import { cn } from "@/lib/utils";
import { Hammer, LayoutDashboard, Library, LockOpen, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const chakraPetch = Chakra_Petch({
  weight: "700",
  subsets: ["latin-ext"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-teal-300",
  },
  {
    label: "MyLib",
    icon: Library,
    href: "/myLib",
    color: "text-violet-300",
  },
  {
    label: "Flashcard Builder",
    icon: Hammer,
    href: "/build",
    color: "text-lime-300",
  },
  {
    label: "Go Premium",
    icon: LockOpen,
    href: "/pro",
    color: "text-sky-300",
  },
  {
    label: "Get in Touch",
    icon: Mail,
    href: "/contact",
    color: "text-amber-300",
  }
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-10 h-10 mr-4 rounded-full overflow-hidden">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl", chakraPetch.className)}>
            FlashMasterAI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;