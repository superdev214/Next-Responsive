import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import Tabs from "../components/Addcontract/Tabs";
export default function addContract() {
  return (
    <>
      <div className="mx-4 mt-8 ">
        <div className="flex items-center gap-4 p-4">
          <SettingsIcon sx={{ fontSize: 50 }} />
          <span className="text-4xl text-gray-700">Text here</span>
        </div>
        <div className="container mx-auto">
          <Tabs />
        </div>
        
      </div>
    </>
  );
}

addContract.getInitialProps = async () => {
  return { props: {} };
};
