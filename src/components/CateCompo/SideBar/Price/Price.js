import Input from "../../Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Explora por precios</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={20.00}
          title="$0 - 20"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={30.00}
          title="20.00 - 30.00"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={60.00}
          title="30.00 - 60.00"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={70.00}
          title="Over 70.00"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;