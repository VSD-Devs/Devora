import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Devora - Web Design & Development",
  description: "Explore our portfolio of successful web design and development projects. See how we've helped businesses transform their digital presence.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 