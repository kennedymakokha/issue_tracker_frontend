import React from "react";
import { BottomNavigation } from "./general/Layout/BottomNavigation";
import TopNavigation from "./general/Layout/TopNavigation";
import { LightWrapper } from "./general/LightWrapper";
import { Wrapper } from "./general/Wrapper";
import { AiOutlineCalendar } from "react-icons/ai";

const NormalLayout = ({ children, navigation }) => {
  return (
    <div
      className="relative min-h-screen bg-light"
      style={{ display: "grid", gridTemplateRows: "70px 1fr 70px" }}
    >
      {/* top navigation section */}
      <div className="sticky top-0 right-0 left-0 flex">
        <TopNavigation
          title={navigation && navigation.title}
          showBack={navigation && navigation.showBack}
          showFilter={navigation && navigation.showFilter}
        />
      </div>

      {/* main section */}
      <div className=" py-4 h-full ">
        {navigation && navigation.showFilter && (
          <div>
            <Wrapper className=" flex justify-around p-2">
              <LightWrapper className="p-2 gap-3 text-sm min-w-28 px-5">
                <AiOutlineCalendar className=" text-yellow text-base" />
                Today
              </LightWrapper>
              <LightWrapper className="p-2 gap-3 justify-start text-sm w-32  px-5">
                Service
              </LightWrapper>
            </Wrapper>
          </div>
        )}
        {children}
      </div>

      {/* bottom navigation section */}
      <div
        className="fixed bottom-0 left-0 right-0 "
        style={{ height: "75px" }}
      >
        <BottomNavigation />
      </div>
    </div>
  );
};

export default NormalLayout;
