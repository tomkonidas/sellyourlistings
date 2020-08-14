import Footer from "./Footer";

const Layout = (props) => (
  <div>
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
