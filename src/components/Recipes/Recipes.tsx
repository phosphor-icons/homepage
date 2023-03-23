import { IconContext } from "@phosphor-icons/react";

import Recipe from "./Recipe";
import items from "./items";
import "./Recipes.css";

const Recipes = () => {
  return (
    <div>
      <div className="toolbar">
        <div className="toolbar-contents">
          <h2>Recipes</h2>
          <p>Cool stuff to do with Phosphor</p>
        </div>
      </div>
      <div className="grid-container">
        <IconContext.Provider value={{ size: 64, color: "var(--foreground)" }}>
          <div className="recipes grid">
            {items.map((itemProps) => (
              <Recipe key={itemProps.title} {...itemProps} />
            ))}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Recipes;
