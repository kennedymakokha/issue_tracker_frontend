import React from "react";
import { AdminLayout } from "../components/admin/AdminLayout";
import { LightWrapper } from "../components/general/LightWrapper";
import { Wrapper } from "../components/general/Wrapper";
import { AiOutlineCalendar } from "react-icons/ai";
import { PostedIssue } from "../components/issues/PostedIssue";

export const Issues = () => {
  return (
    <AdminLayout
      navigation={{ title: "Issues", showFilter: true, showBack: true }}
    >
      <div>
        <Wrapper className=" flex justify-around p-2">
          <LightWrapper className="p-2 gap-3 text-sm min-w-28 px-5 font-medium">
            <AiOutlineCalendar className=" text-yellow text-base" />
            12 Oct - 15 Nov
          </LightWrapper>
          <LightWrapper className="p-2 gap-3 justify-start text-sm w-32  px-5 font-medium">
            Service
          </LightWrapper>
        </Wrapper>
      </div>

      {/* posted issues */}
      <div className="mt-5">
        <PostedIssue />

        <PostedIssue />
      </div>
    </AdminLayout>
  );
};
