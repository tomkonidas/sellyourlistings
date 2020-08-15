const Container = (props) => (
  <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div>{props.children}</div>
  </div>
);

export default Container;
