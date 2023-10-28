const Button = ({ onClickHandler, value, nombre }) => {
    return (
      <button onClick={onClickHandler} value={value} className="btns">
        {nombre}
      </button>
    );
  };
  
  export default Button;