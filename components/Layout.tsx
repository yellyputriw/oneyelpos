import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface ILayout {
  children: ReactNode;
  isActive: boolean;
}

const Layout = ({ children, isActive }: ILayout) => {
  return (
    <div className="bg-neutral-100 ">
      <Header />
      <div className="grid grid-cols-3">
        <Sidebar isActive={isActive} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
