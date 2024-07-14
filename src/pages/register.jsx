import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/Form-Register";

const RegiterPage = () => {
  return (
    <AuthLayout type="register" title="Register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegiterPage;
