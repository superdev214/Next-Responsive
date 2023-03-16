import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Modal } from "@mui/material";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { Close } from "@material-ui/icons";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalContainer = styled.div`
  background-color: white;
  width: 700px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CloudIcon = styled(CloudUploadIcon)`
  width: 150px;
  height: 150px;
`;

const FileDropzone = (
  props: DropzoneOptions & { open: boolean; handleClose: () => void }
) => {
  const { getRootProps, getInputProps } = useDropzone();

  const [fileName, setFileName] = useState("");

  const { open, handleClose } = props;

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <StyledModalContainer>
        <h2 className="text-center text-3xl">Upload Contract</h2>
        <StyledDropzoneContainer {...getRootProps()}>
          <input {...getInputProps({ onChange: handleFileChange })} />
          <div className="border-dotted border-black border-2 px-5 py-4 ">
            <p>Drag and drop your files here, or click to select files</p>
            <div className="flex justify-center">
              <CloudIcon />
            </div>
            <div className="flex justify-center">
              <button className="bg-gray-400 px-3 py-3 rounded-xl ">
                Browse Files
              </button>
            </div>
            <p>Selected file: {fileName}</p>
          </div>
        </StyledDropzoneContainer>
      </StyledModalContainer>
    </StyledModal>
  );
};

export default FileDropzone;
