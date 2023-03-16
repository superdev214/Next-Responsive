import React, { useState } from 'react';
import styled from "@emotion/styled";
import { Checkbox, Button, Modal } from '@mui/material';

interface CheckboxWithModalProps {
  label: string;
}

const CheckboxWithModal: React.FC<CheckboxWithModalProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleLabelClick = () => {
    if (isChecked) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CheckboxContainer>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <Label onClick={handleLabelClick}>Agree with terms and conditions</Label>
      </CheckboxContainer>
      {isChecked && (
        <Modal open={open} onClose={handleClose}>
          <ModalContent>
            <h2>Terms and Conditions</h2>
            <p>Here are the terms and conditions that you need to agree to:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-left: 8px;
  cursor: pointer;
  text-decoration: underline;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 16px;
`;

export default CheckboxWithModal;
