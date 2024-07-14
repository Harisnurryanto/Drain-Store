import Navigations from "../Elements/Link";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen items-center">
      <div className="w-full max-w-sm ">
        <h2 className="text-4xl font-bold text-blue-500 mb-2">{title}</h2>
        <p className="font-light text-slate-500-300 text-xl mb-3">
          Welcome, Drain Tech
        </p>
        {children}
        <Links type={type}></Links>
      </div>
    </div>
  );
};

const Links = ({ type }) => {
  if (type === "login") {
    return <Navigations to="/register">Don't Have an Account? yes</Navigations>;
  } else {
    return <Navigations to="/login">Have an Account? yes</Navigations>;
  }
};

export default AuthLayout;
