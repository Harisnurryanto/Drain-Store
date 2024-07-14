const Input = (props) => {
  const { id, name, type, placeholder, value, onChange } = props;
  return (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded h-10 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
