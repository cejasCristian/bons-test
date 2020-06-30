import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalRules = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='link' onClick={handleShow} className='mt-3' block>
        Click for game rules
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>WELCOME TO BONS CARD GAME!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Rules:</h4>
          <p>1. Put your name and click in LOG IN button</p>
          <p>2. You are in the GameBoard. You will receive 3 cards to start. You can end your turn without choosing a card. The next turn you will receive another new card and it will accumulate </p>
          <p>3. Select a card, and when you are sure, click END TURN to execute the effect</p>
          <p>4. The monster execute his turn and effect</p>
          <p>Note: The monster can execute the effect HORROR, which incapacitates you to choose a card. You will notice because the board is disabled, in which case you must run END TURN</p>
          <h3>To win:</h3>
          <p>Defeat monster before 20 turns pass (lower his HP to 0)</p>
          <h3>To lose:</h3>
          <p>Monster defeat you (lower your HP to 0)</p>
          <p>Past 20 turns and you could not defeat him</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={handleClose}>
            Enjoy!!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRules;
