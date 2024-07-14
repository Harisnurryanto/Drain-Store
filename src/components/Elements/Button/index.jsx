import Button from "./Button";

const Buttons = (props) => {
  const { children, type, margin, onClick } = props;
  return (
    <div className="">
      <Button type={type} margin={margin} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default Buttons;
