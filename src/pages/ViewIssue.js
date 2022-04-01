import React from "react";

import { Input } from "../components/Input";
import PostedIssueView from "../components/issues/PostedIssueView";
import NormalLayout from "../components/NormalLayout";

export const ViewIssue = () => {
  return (
    <NormalLayout
      navigation={{ title: "My Issues", showBack: true, showFilter: true }}
    >
      <div className="px-2">
        {/* posted issues */}
        <div className="mb-11">
          <PostedIssueView />
        </div>

        {/* issue input */}
        <div className="fixed left-0 right-0" style={{ bottom: "72px" }}>
          <Input />
        </div>
      </div>
    </NormalLayout>
  );
};
