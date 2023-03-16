import React, { useState } from "react";
import styled from "@emotion/styled";
import { Modal, Select, MenuItem, TextField, InputLabel, FormControl, Button } from "@mui/material";
import FileDropzone from "./Dropzone";
import { useDropzone } from "react-dropzone";
const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledModalContainer = styled.div`
  background-color: white;
  width: 650px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`;
const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
  height: "35px"
`;
type ModalProps = {
  open: boolean;
  handleClose: () => void;
};
export default function MyModal({ open, handleClose }: ModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClose();
  };
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const handleUploadModalOpen = () => {
    setUploadModalOpen(true);
  };
  const handleUploadModalClose = () => {
    setUploadModalOpen(false);
  };
  const { getRootProps, getInputProps } = useDropzone();
  return (
    <>
    <StyledModal open={open} onClose={handleClose} style={{color:'black'}}>
      <StyledModalContainer>
        <h2 className="text-center text-[25px]">Add New Contract Here!</h2>
        <h2 className="text-center text-0.5xl pb-3">Review/Update the new contract information below</h2>
        {/* <hr /> */}
        <form onSubmit={handleSubmit}>
          <hr />
          <FormControl fullWidth size="small" className="mt-[20px]">
            <InputLabel id="demo-simple-select-label">Your Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Your Role"
            >
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>User</MenuItem>
              <MenuItem value={30}>Client</MenuItem>
            </Select>
          </FormControl>
          <div className="mb-[20px]">
            <h1 className="text-[12px] pb-2 pt-[12px] font-bold">PROJECT DETAILS</h1>
            <StyledInputContainer>
              <TextField
                className="w-[100%] "
                label="Public Body"
                variant="outlined"
                size="small"
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="Project  Name"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-[100%]"
                label="Contract ID"
                variant="outlined"
                size="small"
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="Award Date"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-[100%]"
                label="Award Amount"
                variant="outlined"
                size="small"
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-status">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Status"
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
                  <MenuItem value={30}>Client</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-Project">Project Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Project Type"
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
                  <MenuItem value={30}>Client</MenuItem>
                </Select>
              </FormControl>
            </StyledInputContainer>
          </div>
          <hr/>
          <div className="mt-[20px] mb-[20px]">
            <h1 className="text-[12px] pb-2 font-bold">PROJECT LOCATIONS</h1>
            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="Street Address"
                variant="outlined"
                size="small"
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-city">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="City"
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
                  <MenuItem value={30}>Client</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-city">County</InputLabel>
                <Select
                  labelId="demo-simple-select-county"
                  id="demo-simple-select"
                  // value={age}
                  label="County"
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
                  <MenuItem value={30}>Client</MenuItem>
                </Select>
              </FormControl>
            </StyledInputContainer>
            <StyledInputContainer>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-city">State</InputLabel>
                <Select
                  labelId="demo-simple-select-state"
                  id="demo-simple-select"
                  // value={age}
                  label="State"
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
                  <MenuItem value={30}>Client</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="w-[100%]"
                label="Zip Code"
                variant="outlined"
                size="small"
              />
            </StyledInputContainer>
          </div>
          <hr />
          <div className="mt-[20px]">
            <h1 className="text-[12px] pb-2 font-bold">SUB-CONTRATOR</h1>
            <h2 className="text-[12px] pb-2">Sub-contractor 1 information</h2>
            <StyledInputContainer>
              {/* <TextField className="w-[100%]" label="City" variant="outlined" /> */}
              <TextField
                className="w-[50%]"
                label="Company name"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-[30%]"
                label="Certificate Number"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-[20%]"
                label="FEIN"
                variant="outlined"
                size="small"
              />
            </StyledInputContainer>
            <StyledInputContainer>
            <TextField
              className="w-[100%]"
              id="outlined-multiline-static"
              multiline
              rows={2}
              placeholder="Description"
            />
            </StyledInputContainer>
          </div>
          <div className="flex justify-between">
            <button className="text-bold text-[12px] pb-2 underline">+ Add another Sub-contractor</button>
            <button className="text-bold text-[12px]  pb-2 underline text-blue-600">UPLOAD CONTRACT</button>
          </div>
          <div className="flex justify-end">
            <Button variant="contained" style={{color: "white", backgroundColor: "grey"}}>
              SUBMIT
            </Button>
          </div>
        </form>
      </StyledModalContainer>
    </StyledModal>
      <FileDropzone
      open={uploadModalOpen}
      handleClose={handleUploadModalClose}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
    />
    </>
  );
}