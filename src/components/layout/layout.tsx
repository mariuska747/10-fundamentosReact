import { ReactNode } from "react";
import Footer from "./footer";
import Header, { HeaderProps } from "./header";

interface Props {
  children: ReactNode;
  title: string;
}

export default function Layout({ title, children }: Props) {
  return (
    <div>
      <Header />
      <main>
        <h2 className="justify-center text-center text-4xl font-bold">
          {title}
        </h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}
