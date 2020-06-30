import React from 'react';
import {Container, Col, Row, CardColumns} from 'react-bootstrap';
import Status from './Status';
import PlayerCard from './Card';
import TurnsInfo from './Sidebar';
import Alert from './Alert';
import player from '../../shared/images/player.png';
import {useSelector} from 'react-redux';
import ModalMessage from './Modal';
import './gameBoard.css';

const GameboardPage = () => {
  // player data
  const playerStatus = useSelector(state => state.getPlayerData.playerData);

  // monster data
  const monsterStatus = useSelector(state => state.getMonsterData.monsterData);

  // get data for new game
  const newGame = useSelector(state => state.getGameData.gameData);

  const lifeMonster = (monsterStatus.hp / monsterStatus.maxHp) * 100;
  const lifePlayer = (playerStatus.hp / playerStatus.maxHp) * 100;

  return (
    <>
      {playerStatus.hp === 0 || monsterStatus.hp === 0 || newGame.currentTurn === 20 ? (
        <ModalMessage />
      ) : (
        <Container>
          <Row className='vh-100 mt-2'>
            <Alert />
            <Col xs={8}>
              <Status avatar={monsterStatus.image} pj={monsterStatus.name} hp={`HP: ${monsterStatus.hp}/${monsterStatus.maxHp}`} shield={`Shield: ${monsterStatus.shield}`} life={lifeMonster} />
              <Status avatar={player} pj={playerStatus.name} hp={`HP: ${playerStatus.hp}/${playerStatus.maxHp}`} shield={`Shield: ${playerStatus.shield}`} life={lifePlayer} />
              <Row>
                <Col>
                  <CardColumns>
                    <PlayerCard />
                  </CardColumns>
                </Col>
              </Row>
            </Col>
            <Col xs={3} className='bg-dark text-white p-0 mt-2 mb-4 h-100 mx-auto'>
              <TurnsInfo currentTurn={newGame.currentTurn + 1} pastTurn={newGame.currentTurn} leftTurn={newGame.turnsLeft - 1} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default GameboardPage;
