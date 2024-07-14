import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/Form-Login";

const LoginPage = () => {
  return (
    <AuthLayout type="login" title="Login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;
