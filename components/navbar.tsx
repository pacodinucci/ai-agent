"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600"],
});

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            agent.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm" variant="premium">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};
