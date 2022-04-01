import React from "react";

import NormalLayout from "../components/NormalLayout";
import { PostedIssue } from "../components/issues/PostedIssue";

/**
 * View list of issues that you previously posted
 * Click issue to view its replies
 */

export const MyIssues = () => {
  return (
    <NormalLayout
      navigation={{ title: "My Issues", showBack: true, showFilter: true }}
    >
      <div className="px-2">
        {/* posted issues */}
        <div className="">
          <PostedIssue />

          <PostedIssue />
        </div>
      </div>
    </NormalLayout>
  );
};
