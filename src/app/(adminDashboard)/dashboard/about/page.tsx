/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DashboardAboutHeader from "@/components/dashboard/about/DashboardAboutHeader";
import DashboardAdvisorSection from "@/components/dashboard/about/DashboardAdvisorSection";
import DashboardTeamSection from "@/components/dashboard/about/DashboardTeamSection";

const DashboardAboutPage = () => {
  return (
    <div>
      {/* main image  */}
      <DashboardAboutHeader />
      {/* team members  */}
      <DashboardTeamSection />
      {/* Advisors  */}
      <DashboardAdvisorSection />
    </div>
  );
};

export default DashboardAboutPage;
