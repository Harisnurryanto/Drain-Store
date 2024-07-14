import Navigation from "./Link";

const Navigations = (props) => {
  const { children, to } = props;
  return (
    <div className="text-center mt-4">
      <Navigation to={to}>{children}</Navigation>
    </div>
  );
};

export default Navigations;
