"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Hammer, LayoutDashboard, Library, LockOpen, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-teal-300",
    bgColor: "bg-stone-600",
  },
  {
    label: "MyLib",
    icon: Library,
    href: "/myLib",
    color: "text-violet-300",
    bgColor: "bg-amber-900",
  },
  {
    label: "Flashcard Builder",
    icon: Hammer,
    href: "/build",
    color: "text-lime-300",
    bgColor: "bg-sky-700",
  },
  {
    label: "Go Premium",
    icon: LockOpen,
    href: "/pro",
    color: "text-sky-300",
    bgColor: "bg-violet-900",
  },
  {
    label: "Get in Touch",
    icon: Mail,
    href: "/contact",
    color: "text-amber-300",
    bgColor: "bg-teal-800",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-800">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 bg-clip-text tracking-tight text-transparent">
          Boost Your Brainpower
        </h2>
        <p className="font-light text-slate-50 text-sm md:lg text-center">
          Master flashcards with AI precision. Boost your learning with smart,
          adaptive technology.
        </p>
        <div className="flex justify-center p-3">
          <div className="relative w-96 h-96">
            <Image fill alt="Main Logo" src="/MainLogo.png" />
          </div>
        </div>
      </div>
      <div className="px-4 pb-7 md:px-20 lg:px-32 space-y-4 ">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="bg-indigo-200 p-2 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
