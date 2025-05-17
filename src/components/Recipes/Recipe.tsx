import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";

export type RecipeProps = {
  title: string;
  url: string;
  Example: () => JSX.Element;
};

const Recipe = ({ url, Example }: RecipeProps) => {
  return (
    <a className="recipe card" href={url} target="_blank">
      {/* <h1>{title}</h1> */}
      <div className="recipe-linkout">
        <span>Open on StackBlitz</span>
        <ArrowCircleUpRightIcon weight="fill" size={32} />
      </div>
      <Example />
    </a>
  );
};

export default Recipe;
