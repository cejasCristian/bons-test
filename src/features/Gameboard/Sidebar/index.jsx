import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import * as fetch from '../../../app/helpers/fetch';
import {alertAction} from '../../../model/actions';

const TurnsInfo = ({currentTurn, pastTurn, leftTurn}) => {
  const cardID = useSelector(state => state.selectedCardData.cardData);
  const gameID = useSelector(state => state.getGameData.gameData.id);
  const playerID = useSelector(state => state.getPlayerData.playerData.id);
  const dispatch = useDispatch();

  const nextTurn = async () => {
    await fetch.getNextTurn(gameID, cardID);
    await fetch.getPlayer(gameID);
    await fetch.getMonster(gameID);
    await fetch.getCards(playerID);
    dispatch(alertAction.alert(true));
  };

  return (
    <Card className='bg-dark text-white border-0'>
      <Card.Header className='mb-4 p-3 bg-secondary text-center text-white font-weight-bold'>TURNS</Card.Header>
      <Card className='bg-dark text-white border-0'>
        <Card.Body className='bg-dark text-white mb-4 mt-3'>
          <Card.Text className='text-center'>CURRENT</Card.Text>
          <Card.Title className='text-center font-weight-bold display-4'>{currentTurn}</Card.Title>
          <Card.Text className='text-center'>PAST</Card.Text>
          <Card.Title className='text-center font-weight-bold display-4'>{pastTurn}</Card.Title>
          <Card.Text className='text-center'>LEFT</Card.Text>
          <Card.Title className='text-center font-weight-bold display-4'>{leftTurn}</Card.Title>
        </Card.Body>
      </Card>
      <Button variant='info' type='submit' size='xs' className='mt-5 mb-5 mx-5' onClick={() => nextTurn()}>
        END TURN
      </Button>
    </Card>
  );
};

export default TurnsInfo;
