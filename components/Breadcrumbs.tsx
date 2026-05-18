import Link from "next/link"

export type BreadcrumbLink = {
  name: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbLink[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-foreground">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
