import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalCom = (props) => {
//   const {
    // buttonLabel,
    // className
//   } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Press Modal</Button>
      <Modal size="xs" isOpen={modal} toggle={toggle} className="bd-dark">
        <ModalHeader toggle={toggle} className="text-center">Modal</ModalHeader>
        <ModalBody className="bd-dark">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
        <label for="customRange1" className="form-label">Example range</label>
            <input type="range" className="form-range" id="customRange1" />
          <Button color="dark"  onClick={toggle}>Do Something</Button>{' '}
          <Button color="success" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCom;