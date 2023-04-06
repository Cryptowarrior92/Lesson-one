const Button = ({ buttonText, color }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {buttonText}
    </button>
  );
};

export default Button;
