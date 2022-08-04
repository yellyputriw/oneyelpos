import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface ILayout {
  children: ReactNode;
  isActive: boolean;
}

const Layout = ({ children, isActive }: ILayout) => {
  return (
    <div className="bg-neutral-100 flex">
      <Sidebar isActive={isActive} />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
