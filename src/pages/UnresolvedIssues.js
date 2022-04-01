import React from "react";
import NormalLayout from "../components/NormalLayout";
import { PostedIssue } from "../components/issues/PostedIssue";

export const UnresolvedIssues = () => {
  return (
    <NormalLayout
      navigation={{ title: "UnResloved", showBack: true, showFilter: true }}
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
