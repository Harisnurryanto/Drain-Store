const Lable = (props) => {
  const { htmlFor, children } = props;
  return (
    <label className="block text-gray-500 font-bold mb-2" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Lable;
