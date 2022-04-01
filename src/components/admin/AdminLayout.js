import React from "react";
import TopNavigation from "../general/Layout/TopNavigation";
import BottomNavigation from "./BottomNavigation";

export const AdminLayout = ({ children, navigation }) => {
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
      <div className=" py-4 h-full ">{children}</div>

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
