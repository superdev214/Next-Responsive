import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Modal from "./Modal";

type Contract = {
  id: string;
  projectName: string;
  contractorType: string;
  location: string;
};

type ContractsCardProps = {
  contracts: Contract[];
};

export default function ContractsCard({}: ContractsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const contracts: Contract[] = [
    {
      id: "2345678",
      projectName: "ProjectName 1",
      contractorType: "Prime Contractor",
      location: "NEWYORK, NEWJERSEY",
    },
    {
      id: "3456789",
      projectName: "ProjectName 2",
      contractorType: "Sub Contractor",
      location: "CHICAGO, ILLINOIS",
    },
    {
      id: "4567890",
      projectName: "ProjectName 3",
      contractorType: "Sub Contractor",
      location: "LOS ANGELES, CALIFORNIA",
    },
  ];

  return (
    <>
      <div className="mb-20" style={{color:'black'}}>
        <div className="items-center justify-between pb-5 sm:flex">
          <div>
            <span className="pt-10">View/add contracts here</span>
          </div>

          <div className="flex gap-4">
            <div>
              <button onClick={handleModalOpen} className="px-4 py-2 text-white bg-gray-400 h-[35px] flex items-center text-[12px] sm:text-[18px] lg:text-[20px] rounded">
                <AddIcon/>Add contract
              </button>
            </div>
            <div>
              <button className="px-4 py-2 text-white bg-gray-400 h-[35px] flex items-center text-[12px] rounded sm:text-[18px] lg:text-[20px]">
                <ZoomOutIcon/>View contract
              </button>
            </div>
          </div>
        </div>
        <hr />

        <div className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2">
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="flex flex-col justify-between w-full px-5 py-10 text-center border sm:flex-row"
            >
              <div className="">
                <div className="my-2">
                  <strong className="text-[15px] sm:text-[20px] lg:text-[32px]">{contract.projectName}</strong>
                  <p className="text-[14px] sm:text-[15px] lg:text-[28px]">{contract.contractorType}</p>
                </div>
                <div className="my-2">
                  <span className="text-[14px] sm:text-[17px] lg:text-[29px]">{contract.location}</span>
                </div>
                <span className="text-[14px] sm:text-[15px] lg:text-[28px]">ID: {contract.id}</span>
              </div>
              <div className="flex flex-col items-center my-auto">
                <button
                  className="px-2 text-[12px] mt-5 bg-gray-400 py-2 text-white h-auto rounded flex items-center justify-center sm:text-[15px] lg:text-[18px]"
                >
                  Add/view certified Payroll Info
                </button>
                <div className="">
                  <span className="underline text-[11px] sm:text-[15px] ">
                    Last submitted Certified payroll: mm/ddd/yy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal open={isModalOpen} handleClose={handleModalClose} />
    </>
  );
}
