import React, {useEffect} from 'react';
import {Container, Col, Row, CardDeck} from 'react-bootstrap';
import Status from '../components/Status';
import PlayerCard from '../components/PlayerCard';
import TurnsInfo from '../components/TurnsInfo';
import monster from '../../shared/images/monster.png';
import player from '../../shared/images/player.png';
import {useSelector, useDispatch} from 'react-redux';
import {cardActions} from '../../model/actions';
import axios from 'axios';

const GameboardPage = () => {
  const dispatch = useDispatch();

  // player data
  const playerStatus = useSelector(state => state.getPlayerData.playerData);

  // monster data
  const monsterStatus = useSelector(state => state.getMonsterData.monsterData);

  // get data from API
  useEffect(() => {
    async function fetchData() {
      const res = await axios(`http://game.bons.me/api/players/${playerStatus.id}/cards`);
      const data = await res.data;
      dispatch(cardActions.setCardData(data));
    }
    fetchData();
  }, [dispatch, playerStatus.id]);

  // card data
  const cardStatus = useSelector(state => state.getCardData.cardData);

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
                {cardStatus &&
                  cardStatus.map(card => {
                    const {effect, value, id} = card;
                    return <PlayerCard key={id} cardName={effect} value={value} />;
                  })}
              </CardDeck>
            </Col>
          </Row>
        </Col>
        <Col xs={3} className='bg-dark text-white p-0 m-auto'>
          <TurnsInfo currentTurn={newGame.currentTurn} pastTurn={newGame.currentTurn} leftTurn={newGame.turnsLeft} />
        </Col>
      </Row>
    </Container>
  );
};

export default GameboardPage;
