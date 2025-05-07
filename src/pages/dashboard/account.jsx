import Accountup from "@/components/dashboard/accountupper";
import React from "react";
import GeneratedChart from "./GeneratedChart";

function Account() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <div>
            <Accountup />{" "}
          </div>
          <div>
            <GeneratedChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
