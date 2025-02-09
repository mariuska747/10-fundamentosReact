import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Page({ title, children }: Props) {
  return (
    <div>
      <h2 className="my-10 text-center text-3xl">{title}</h2>
      {children}
    </div>
  );
}
