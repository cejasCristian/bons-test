import React from 'react';
import {useDispatch} from 'react-redux';
import {Card, Button} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {gameActions} from '../../model/actions';

const TurnsInfo = ({currentTurn, pastTurn, leftTurn}) => {
  const cardID = useSelector(state => state.selectedCardData.cardData);
  const game = useSelector(state => state.getGameData.gameData);
  const dispatch = useDispatch();

  const fetch = async () => {
    const res = await axios.post(`http://game.bons.me/api/games/${game.id}/next-turn`, {card: cardID});
    const data = await res.data;
    dispatch(gameActions.setGameData(data.game));

    // eslint-disable-next-line no-shadow
    axios.post(`http://game.bons.me/api/${game.id}`).then(res => {
      const data2 = res.data;
      dispatch(gameActions.setGameData(data2));
    });
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
      <Button variant='info' type='submit' size='xs' className='mt-5 mb-5 mx-5' onClick={() => fetch()}>
        END TURN
      </Button>
    </Card>
  );
};

export default TurnsInfo;
