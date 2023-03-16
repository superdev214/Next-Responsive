import * as React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "@mui/material/Modal";
import { useRouter } from 'next/router';
import { useState } from 'react';
const FlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  gap: 30px;
  align-items: center;
  & > :not(style) {
    m: 1;
    width: 800px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
    & > :not(style) {
      width: 100%;
    }
  }
`;


const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    handleModalOpen();
  };

  const router = useRouter();
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // do something with form data here
    router.push("/addcontract");
  };

  return (
    <>
      <div className="container mx-auto overflow-auto " style={{color:'black'}}>
        <div className="my-5">
          <span className="text-4xl font-bold">Hello! Welcome.</span>
          <br />
          <span>Register below by entering your data</span>
        </div>

          <div className="">
            <div>
              <FlexBox>
                <div>
                  <h1 className="font-bold pb-2">First Name</h1>
                  <TextField
                    id="first-name"
                    label="First Name*"
                    variant="filled"
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="">
                  <h1 className="font-bold pb-2">Last Name</h1>
                  <TextField
                    id="last-name"
                    label="Last Name*"
                    variant="filled"
                    sx={{ width: "100%" }}
                  />
                </div>
              </FlexBox>
            </div>
          </div>

          <div className="mt-5 mx-5">
            <label className="font-bold pb-2">Email</label>
            <TextField
              className="w-full"
              id="email"
              label="Email*"
              variant="filled"
              placeholder="johndoe@gmail.com"
              sx={{ width: "100%" }}
            />
          </div>

          <div className="mt-5">
            <div>
              <FlexBox>
                <div>
                  <h1 className="font-bold pb-2">Pin</h1>
                  <TextField
                    id="pin"
                    label="PIN"
                    variant="filled"
                    placeholder="11111111111*"
                    sx={{ width: "100%" }}
                  />
                </div>

                <div>
                  <h1 className="font-bold pb-2">Code number</h1>
                  <TextField
                    id="code-number"
                    label="Code Number*"
                    variant="filled"
                    placeholder="1111111*"
                    sx={{ width: "100%" }}
                  />
                </div>
              </FlexBox>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <FlexBox>
                <div>
                  <h1 className="font-bold pb-2">YOUR JOB TITLE</h1>
                  <TextField
                    id="job-title"
                    label="Job Title"
                    variant="filled"
                    placeholder="E.g Project Manager, etc"
                    sx={{ width: "100%" }}
                  />
                </div>

                <div>
                  <h1 className="font-bold pb-2">Phone Number</h1>
                  <TextField
                    id="phone-number"
                    label="Phone Number*"
                    variant="filled"
                    placeholder="111-111-111*"
                    sx={{ width: "100%" }}
                  />
                </div>
              </FlexBox>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <FlexBox>
                <div>
                  <h1 className="font-bold pb-2">Create Password</h1>
                  <TextField
                    id="password"
                    label="Password*"
                    variant="filled"
                    type="password"
                    sx={{ width: "100%" }}
                  />
                </div>

                <div>
                  <h1 className="font-bold pb-2">Retype Password</h1>
                  <TextField
                    id="confirm-password"
                    label="Confirm Password*"
                    variant="filled"
                    type="password"
                    sx={{ width: "100%" }}
                  />
                </div>
              </FlexBox>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <FormControlLabel
			    style={{color:"blue"}}
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleCheck}
                    name="terms"
                  />
                }
                label="I agree to the terms and conditions"
              />
            </div>

            <StyledModal
              open={open}
              onClose={handleModalClose}
			  style={{color:'black'}}
            >
              <Box
                sx={{
                  width: 600,
                  bgcolor: "background.paper",
                  px: 10,
                  py: 3,
                }}
              >
                <div className="flex justify-between">
                  <h1 className=" text-2xl font-bold">Terms and Conditions</h1>
                  <Button onClick={handleModalClose}>Close</Button>
                </div>
                <div className="bg-gray-200 overflow-x-auto px-4 py-2 overflow-y-auto h-[280px]">
                  <p id="modal-description  ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti incidunt doloribus minima id sapiente iusto sint
                    error, laudantium obcaecati, suscipit soluta ea eius saepe
                    amet unde? Voluptatum mollitia sequi possimus! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Tenetur dolorum
                    ab itaque, culpa ipsam facere veniam quod beatae eligendi
                    eius velit molestias voluptates cum? Earum voluptates iste
                    consequatur assumenda illum. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Sit distinctio ducimus veniam
                    quo corrupti! Beatae, delectus recusandae saepe ipsa
                    accusamus magni omnis dolor sit incidunt deserunt? Suscipit
                    consequatur tempora fugiat.
                  </p>
                </div>
                <div className="flex gap-4 mt-5">
                  <button
                    onClick={handleModalClose}
                    className="px-4 py-2 w-full border-2 border-black"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleModalClose}
                    className="px-4 py-2 w-full bg-gray-500 text-white"
                  >
                    Agree
                  </button>
                </div>
              </Box>
            </StyledModal>
          </div>

          <div className="mt-5">
            <button onClick={handleSubmit} type="submit" className="bg-gray-500 px-8 py-3 text-white">
              Submit
            </button>
          </div>
      </div>
    </>
  );
}
