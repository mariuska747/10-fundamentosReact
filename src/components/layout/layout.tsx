import { ReactNode } from "react";
import Footer from "./footer";
import Header, { HeaderProps } from "./header";

interface Props extends HeaderProps {
    children: ReactNode;
    title: string;
}   


export default function Layout({ title, children, ...rest }: Props) {
    return (
        <div>
            <Header {...rest}/>
            <main>
                <h2>{title}</h2>
                {children}
            </main>
            <Footer />
        </div>
        
    );
}