import BottomNavigation from "@/components/BottomNavigation";
import PushNotificationPermission from "@/components/PushNotificationPermission";
import React from "react";

const index = () => {
  return (
    <div>
      This profile
      <PushNotificationPermission />
      <BottomNavigation/>
    </div>
  );
};

export default index;
