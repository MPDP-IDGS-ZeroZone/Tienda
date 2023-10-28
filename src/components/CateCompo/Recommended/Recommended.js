import Button from "../Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Desarolladoras</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="Todas" />
          <Button onClickHandler={handleClick} value="AAA" title="Grandes empresas" />
          <Button onClickHandler={handleClick} value="Indie" title="Indie" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
