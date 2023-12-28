import React from "react";
import Card from "../ui/dashboard/card/Card";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transactions from "../ui/dashboard/transactions/Transactions";
import Chart from "../ui/dashboard/chart/Chart";

const DashboardPage = () => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex flex-col flex-[3] gap-[20px]">
        <div className="flex justify-between gap-[20px]">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
