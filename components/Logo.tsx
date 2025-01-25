"use client"

import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image
        src="/DEVORA.png"
        alt="Devora - Web Development Agency"
        width={40}
        height={40}
        className="h-10 w-auto"
        priority
        quality={90}
        loading="eager"
      />
      <span className="text-white font-bold text-xl tracking-tight group-hover:text-white/90 transition-colors">
        Devora
      </span>
    </Link>
  )
} 