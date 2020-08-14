import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => (
  <div>
    {/* <NavBar /> */}
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
