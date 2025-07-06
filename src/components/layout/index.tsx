import type { ReactNode } from "react";
import NavigationBar from "./navigationBar";
import Footer from "./footer";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
