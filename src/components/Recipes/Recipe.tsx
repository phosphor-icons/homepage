import { ArrowCircleUpRight } from "@phosphor-icons/react";

export type RecipeProps = {
  title: string;
  url: string;
  Example: () => JSX.Element;
};

const Recipe = ({ title, url, Example }: RecipeProps) => {
  return (
    <a className="recipe card" href={url}>
      {/* <h1>{title}</h1> */}
      <div className="recipe-linkout">
        <span>Open on StackBlitz</span>
        <ArrowCircleUpRight weight="fill" size={32} />
      </div>
      <Example />
    </a>
  );
};

export default Recipe;
