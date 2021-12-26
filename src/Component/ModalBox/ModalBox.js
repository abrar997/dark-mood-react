import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import Modal from "react-modal/lib/components/Modal";
import './Modal.css'
Modal.setAppElement('#root')
const ModalBox = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setModal(true)}>clcik</Button>
      {/* onRequestClose to cloes modal by esc key from keyboard or click on any place in window  */}
      <Modal
        isOpen={modal}
        // make it close by click on overlay
        onRequestClose={() => setModal(false)}
        // stop close modal by click on overlay
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "transparent",
          },
          content: {
            color: "green",
            border:"1px solid green"
          },
        }}
      >
        <Typography varisnt="h6">modal title</Typography>
        <Typography variant="subtitle2">hello world fgdfdhvdvdvd</Typography>
        <Button onClick={() => setModal(false)}>x</Button>
      </Modal>
    </div>
  );
};

export default ModalBox;
