import Header from "@/components/Header/header";
import React from "react";

type childrenProps = {
    children?: React.ReactNode;
};

const Layout = ({children}: childrenProps) => {
    return (
        <>
            <Header/>
            <main className="main-content">
                {children}
            </main>
        </>
    )
}

export default Layout;
