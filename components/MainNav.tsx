"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Logo } from "./Logo"

export function MainNav() {
  return (
    <>
      {/* Dark gradient overlay */}
      <div className="fixed top-0 left-0 right-0 h-64 z-40 pointer-events-none bg-gradient-to-b from-black/90 via-black/50 to-transparent" />
      
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Logo />

            {/* Navigation */}
            <NavigationMenu>
              <NavigationMenuList className="bg-black/20 backdrop-blur-sm rounded-full p-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-sm text-white">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-sm text-white">
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-sm text-white">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-sm text-white">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Button */}
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 