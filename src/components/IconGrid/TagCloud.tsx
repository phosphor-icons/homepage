import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { searchQueryAtom } from "@/state";
import "./TagCloud.css";

interface TagCloudProps {
  name: string;
  tags: string[];
  isDark: boolean;
}

const TagCloud = ({ name, tags, isDark }: TagCloudProps) => {
  const setQuery = useSetRecoilState(searchQueryAtom);
  const handleTagClick = useCallback(
    (tag: string) => {
      setQuery(tag);
      document.getElementById("search-input")?.focus();
    },
    [setQuery]
  );

  return (
    <div className="tag-cloud">
      {tags.map((tag) => (
        <button
          key={`${name}-tag-${tag}`}
          className="tag-button"
          onClick={() => void handleTagClick(tag)}
        >
          <code className={`${isDark ? "dark" : ""}`}>{tag}</code>
          {tag === "*new*" && <span className="badge new">•</span>}
          {tag === "*updated*" && <span className="badge updated">•</span>}
        </button>
      ))}
    </div>
  );
};

export default TagCloud;
