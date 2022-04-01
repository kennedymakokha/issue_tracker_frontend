import React from "react";
import NormalLayout from "../components/NormalLayout";
import { TaggedIssueCard } from "../components/issues/TaggedIssueCard";

export const TaggedIssue = () => {
  return (
    <NormalLayout
      navigation={{ title: "Raised Issues", showBack: true, showFilter: true }}
    >
      <div className="px-2">
        {/* posted issues */}
        <div className="flex flex-col gap-1">
          <TaggedIssueCard />
          <TaggedIssueCard />
        </div>
      </div>
    </NormalLayout>
  );
};
