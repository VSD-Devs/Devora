"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Logo() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image
        src={isHomePage ? "/DEVORA.png" : "/devora-bw.png"}
        alt="Devora - Web Development Agency"
        width={isHomePage ? 220 : 180}
        height={isHomePage ? 68 : 56}
        className={`${isHomePage ? 'h-12 sm:h-14' : 'h-10 sm:h-12 md:h-14'} w-auto object-contain`}
        priority
        quality={95}
        loading="eager"
      />
      {!isHomePage && (
        <span className="text-slate-900 font-bold text-xl tracking-tight group-hover:text-slate-700 transition-colors">
          Devora
        </span>
      )}
    </Link>
  )
} 