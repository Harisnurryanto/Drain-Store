import { Link } from "react-router-dom";

const NavbarNav = (props) => {
  const { to, children, margin, onClick, icon } = props;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${margin} text-teal-50 font-semibold text-xl block hover:text-blue-700 transition duration-100 ease-in-out `}
    >
      <div className="flex items-center">
        {icon}
        {children}
      </div>
    </Link>
  );
};

export default NavbarNav;
