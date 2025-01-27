'use client';

import { usePathname } from 'next/navigation';

export default function NavigationWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectInquiry = pathname?.startsWith('/project-inquiry');

  if (isProjectInquiry) {
    return null;
  }

  return <>{children}</>;
} 