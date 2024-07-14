import Input from "./Input";
import Lable from "./Label";

const Inputs = (props) => {
  const { label, id, name, placeholder, type, value, onChange } = props;
  return (
    <div className="mb-4">
      <Lable htmlFor={name}>{label}</Lable>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      ></Input>
    </div>
  );
};

export default Inputs;
