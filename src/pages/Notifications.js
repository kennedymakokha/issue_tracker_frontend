import React from "react";
import Bold from "../components/general/Typography/Bold";
import NormalText from "../components/general/Typography/NormalText";
import { Notification } from "../components/issues/Notification";
import NormalLayout from "../components/NormalLayout";

export const Notifications = () => {
  return (
    <NormalLayout
      navigation={{ title: "Notifications", showBack: true, showFilter: true }}
    >
      <div className="px-4">
        <NormalText className="text-center">
          <span className="text-sm ">
            You have <span className="text-yellow">3 Notifications</span> Today
          </span>
        </NormalText>

        <div className="mt-3">
          <Bold className="text-xl">Today</Bold>

          {/* notification items list */}
          <div className="mt-2 flex flex-col gap-2">
            <Notification
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
            <Notification
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
            <Notification
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
            <Notification
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
          </div>
        </div>

        <div className="mt-3">
          <Bold className="text-lg">This Week</Bold>

          {/* notification items list */}
          <div className="mt-2 flex flex-col gap-2">
            <Notification
              isViewed={true}
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
            <Notification
              isViewed={true}
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
            <Notification
              isViewed={true}
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
            <Notification
              isViewed={true}
              title="Robert Mwalugha has tagged you"
              message="Kindly look at this product at philadelphia house...."
              time="2min"
            />
          </div>
        </div>
      </div>
    </NormalLayout>
  );
};
