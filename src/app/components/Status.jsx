import React, {useEffect} from 'react';
import {Col, Row, Card, ProgressBar} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {playerActions, monsterActions} from '../../model/actions';
import axios from 'axios';

const Status = ({avatar, pj, hp, shield}) => {
  const dispatch = useDispatch();

  // get data for new game
  const newGame = useSelector(state => state.getGameData.gameData);

  // get data from API (player)
  useEffect(() => {
    async function fetchData() {
      const res = await axios(`http://game.bons.me/api/games/${newGame.id}/player`);
      const data = await res.data;
      dispatch(playerActions.setPlayerData(data));
    }
    fetchData();
  }, [dispatch, newGame.id]);

  // get data from API (monster)
  useEffect(() => {
    async function fetchData() {
      const res = await axios(`http://game.bons.me/api/games/${newGame.id}/monster`);
      const data = await res.data;
      dispatch(monsterActions.setMonsterData(data));
    }
    fetchData();
  }, [dispatch, newGame.id]);

  return (
    <Row className='mb-4'>
      <Col xs={7}>
        <Card className='bg-dark'>
          <Row className='justify-content-md-center align-items-center'>
            <Col xs={5} className='justify-content-md-center align-items-center'>
              <Card.Img src={avatar} alt='avatarImg' className='img-fluid p-2 bg-secondary' />
            </Col>
            <Card.Body>
              <Col xs={7} className='p-0 m-auto'>
                <p className='text-white text-center font-weight-bold m-0'>{pj}</p>
                <p className='text-white text-center m-0'>{hp}</p>
                <ProgressBar animated variant='success' now={100} />
              </Col>
            </Card.Body>
          </Row>
        </Card>
      </Col>
      <Col xs={5}>
        <Card className='bg-secondary mx-auto h-100'>
          <Card.Text className='text-white text-center font-weight-bold my-auto'>{shield}</Card.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default Status;
