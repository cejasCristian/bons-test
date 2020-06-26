import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import loser from '../../shared/images/loser.png';

const ModalMessage = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Modal</Button>
      <Modal size='lg' show={lgShow} onHide={() => setLgShow(false)} aria-labelledby='modal-sizes-title-lg'>
        <Modal.Header className='bg-dark border-dark'>
          <Modal.Title className='text-white m-auto'>Sorry... you lose!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border-dark text-white m-auto'>
          <img src={loser} alt='medal' className='img-fluid p-0' />
        </Modal.Body>
        <Modal.Footer className='bg-dark border-dark'>
          <p className='text-white m-auto'>Don‘t worry!! Try again!</p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalMessage;
