"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface LogoProps {
  variant?: 'default' | 'footer'
}

export function Logo({ variant = 'default' }: LogoProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isFooter = variant === 'footer'
  
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image
        src={isHomePage || isFooter ? "/DEVORA.png" : "/devora-bw.png"}
        alt="Devora - Web Development Agency"
        width={isHomePage || isFooter ? 220 : 180}
        height={isHomePage || isFooter ? 68 : 56}
        className={`${isHomePage || isFooter ? 'h-12 sm:h-14' : 'h-10 sm:h-12 md:h-14'} w-auto object-contain`}
        priority
        quality={95}
        loading="eager"
      />
      {!isHomePage && !isFooter && (
        <span className="text-slate-900 font-bold text-xl tracking-tight group-hover:text-slate-700 transition-colors">
          Devora
        </span>
      )}
      {isFooter && (
        <span className="text-white font-bold text-xl tracking-tight group-hover:text-gray-300 transition-colors">
          Devora
        </span>
      )}
    </Link>
  )
} 