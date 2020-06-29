import React from 'react';
import {Container, Col, Row, CardDeck} from 'react-bootstrap';
import Status from '../components/Status';
import PlayerCard from '../components/PlayerCard';
import TurnsInfo from '../components/TurnsInfo';
import monster from '../../shared/images/monster.png';
import player from '../../shared/images/player.png';
import {useSelector} from 'react-redux';

const GameboardPage = () => {
  // player data
  const playerStatus = useSelector(state => state.getPlayerData.playerData);

  // monster data
  const monsterStatus = useSelector(state => state.getMonsterData.monsterData);

  // get data for new game
  const newGame = useSelector(state => state.getGameData.gameData);

  return (
    <Container>
      <Row className='align-items-center vh-100'>
        <Col xs={8}>
          <Status avatar={monster} pj={monsterStatus.name} hp={`HP: ${monsterStatus.hp}/${monsterStatus.maxHp}`} shield={`Shield: ${monsterStatus.shield}`} />
          <Status avatar={player} pj={playerStatus.name} hp={`HP: ${playerStatus.hp}/${playerStatus.maxHp}`} shield={`Shield: ${playerStatus.shield}`} />
          <Row>
            <Col>
              <CardDeck>
                <PlayerCard />
              </CardDeck>
            </Col>
          </Row>
        </Col>
        <Col xs={3} className='bg-dark text-white p-0 m-auto'>
          <TurnsInfo currentTurn={newGame.currentTurn + 1} pastTurn={newGame.currentTurn} leftTurn={newGame.turnsLeft - 1} />
        </Col>
      </Row>
    </Container>
  );
};

export default GameboardPage;
