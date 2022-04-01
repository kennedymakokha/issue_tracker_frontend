import React from "react";
import { PostedIssue } from "../components/issues/PostedIssue";
import NormalLayout from "../components/NormalLayout";

export const ResolvedIssues = () => {
  return (
    <NormalLayout
      navigation={{ title: "Resolved", showBack: true, showFilter: true }}
    >
      <div className="px-2">
        {/* posted issues */}
        <div className="">
          <PostedIssue />
        </div>
      </div>
    </NormalLayout>
  );
};
