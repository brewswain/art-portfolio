import { NavBar } from "./";

const Layout = ({ children }) => (
  <main className="page__container">
    <NavBar />
    {children}
  </main>
);

export default Layout;
