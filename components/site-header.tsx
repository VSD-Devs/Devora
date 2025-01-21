import Link from "next/link";
import { MainNav } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <span className="font-bold text-xl">Devora</span>
        </Link>
        <div className="mx-6">
          <MainNav />
        </div>
        <div className="ml-auto">
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}