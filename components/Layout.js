import Header from "./Header";
import NavBar from "./NavBar";

const Layout = (props) => (
  <>
    <Header />
    <div>{props.children}</div>
    <NavBar />
  </>
);

export default Layout;
