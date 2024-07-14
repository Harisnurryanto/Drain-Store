const Button = (props) => {
  const { children, type, margin, onClick } = props;
  return (
    <button
      className={`w-full ${margin} bg-blue-400 hover:bg-blue-500 hover:text-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
