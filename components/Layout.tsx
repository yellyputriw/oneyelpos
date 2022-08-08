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
      <Sidebar isActive={isActive} />
      <div className="ml-64 pt-4 px-4">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
