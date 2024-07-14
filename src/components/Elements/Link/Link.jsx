import { Link } from "react-router-dom";
const Navigation = (props) => {
  const { children, to } = props;
  return (
    <Link
      to={to}
      className="inline-block text-blue-400 align-baseline hover:text-blue-500"
    >
      {children}
    </Link>
  );
};

export default Navigation;
