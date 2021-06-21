import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { searchQueryAtom } from "state/atoms";

import "./TagCloud.css";

interface TagCloudProps {
  name: string;
  tags: string[];
  isDark: boolean;
}

const TagCloud: React.FC<TagCloudProps> = ({ name, tags, isDark }) => {
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
        </button>
      ))}
    </div>
  );
};

export default TagCloud;
