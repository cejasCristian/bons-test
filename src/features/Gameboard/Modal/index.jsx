import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import loser from '../../../shared/images/loser.png';
import medal from '../../../shared/images/medal.png';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const ModalMessage = () => {
  const playerStatus = useSelector(state => state.getPlayerData.playerData.hp);

  const newGame = useSelector(state => state.getGameData.gameData);

  const history = useHistory();

  return (
    <>
      {playerStatus.hp === 0 || newGame.currentTurn === 20 ? (
        <Modal size='lg' show aria-labelledby='modal-sizes-title-lg'>
          <Modal.Header className='bg-dark border-dark'>
            <Modal.Title className='text-white m-auto'>Sorry... you lose!</Modal.Title>
          </Modal.Header>
          <Modal.Body className='border-dark text-white m-auto'>
            <img src={loser} alt='loser' className='img-fluid p-0' />
          </Modal.Body>
          <Modal.Footer className='bg-dark border-dark'>
            <Button variant='primary' onClick={() => history.push('/')}>
              Try Again!
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal size='lg' show aria-labelledby='modal-sizes-title-lg'>
          <Modal.Header className='bg-dark border-dark'>
            <Modal.Title className='text-white m-auto'>Congratulations! You WIN!!</Modal.Title>
          </Modal.Header>
          <Modal.Body className='border-dark text-white m-auto'>
            <img src={medal} alt='medal' className='img-fluid p-0' />
          </Modal.Body>
          <Modal.Footer className='bg-dark border-dark'>
            <Button variant='primary' onClick={() => history.push('/')}>
              Try Again!
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ModalMessage;
