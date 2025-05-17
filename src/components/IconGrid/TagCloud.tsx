import { useCallback } from "react";

import { useMediaQuery } from "@/hooks";
import { useApplicationStore } from "@/state";
import "./TagCloud.css";

interface TagCloudProps {
  name: string;
  tags: string[];
}

const TagCloud = ({ name, tags }: TagCloudProps) => {
  const isMobile = useMediaQuery("(max-width: 719px)");
  const setQuery = useApplicationStore.use.setSearchQuery();
  const handleTagClick = useCallback(
    (tag: string) => {
      setQuery(tag);
      !isMobile && document.getElementById("search-input")?.focus();
    },
    [setQuery, isMobile]
  );

  return (
    <div className="tag-cloud">
      {tags.map((tag) => (
        <button
          key={`${name}-tag-${tag}`}
          className="tag-button"
          onClick={() => void handleTagClick(tag)}
        >
          <code>{tag}</code>
          {tag === "*new*" && <span className="badge new">•</span>}
          {tag === "*updated*" && <span className="badge updated">•</span>}
        </button>
      ))}
    </div>
  );
};

export default TagCloud;
