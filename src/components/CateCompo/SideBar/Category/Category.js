import "./Category.css";
import Input from "../../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">categoria</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Mostrar todo
        </label>
        <Input
          handleChange={handleChange}
          value="Terror"
          title="Terror"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Accion"
          title="Accion"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Estrategia"
          title="Estrategia"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Ciencia Ficcion"
          title="Ciencia Ficcion"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Deportivos"
          title="Deportivos"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Mundo Abierto"
          title="Hundo Abierto"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
