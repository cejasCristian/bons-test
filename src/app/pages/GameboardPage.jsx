import React, {useEffect} from 'react';
import axios from 'axios';
import {Container, Col, Row, CardDeck} from 'react-bootstrap';
import Status from '../components/Status';
import PlayerCard from '../components/PlayerCard';
import TurnsInfo from '../components/TurnsInfo';
import monster from '../../shared/images/monster.png';
import player from '../../shared/images/player.png';
import {useSelector, useDispatch} from 'react-redux';
import {playerActions} from '../../model/actions';

const GameboardPage = () => {
  const dispatch = useDispatch();

  // get data for new game
  const newGame = useSelector(state => state.getGameData.gameData);

  // get data for player
  useEffect(() => {
    axios.get(`http://game.bons.me/api/games/${newGame.id}/player`).then(res => {
      const data = res.data;
      dispatch(playerActions.setPlayerData(data));
    });
  }, [dispatch, newGame.id]);

  const playerStatus = useSelector(state => state.getPlayerData.playerData);

  return (
    <Container>
      <Row className='justify-content-md-center align-items-center vh-100'>
        <Col xs={9}>
          <Status avatar={monster} pj='Enemy' hp='HP: 32/40' shield='Shield: 0' />
          <Status avatar={player} pj={playerStatus.name} hp='HP: 16/48' shield='Shield: 45' />
          <Row>
            <Col>
              <CardDeck>
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
              </CardDeck>
            </Col>
          </Row>
        </Col>
        <Col xs={3} className='bg-dark text-white p-0'>
          <TurnsInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default GameboardPage;
