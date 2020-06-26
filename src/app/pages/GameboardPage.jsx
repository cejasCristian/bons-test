import React from 'react';
import {Container, Col, Row, CardDeck} from 'react-bootstrap';
import Status from '../components/Status';
import PlayerCard from '../components/PlayerCard';
import TurnsInfo from '../components/TurnsInfo';
import monster from '../../shared/images/monster.png';
import player from '../../shared/images/player.png';

const GameboardPage = () => (
  <Container>
    <Row className='justify-content-md-center align-items-center vh-100'>
      <Col xs={9}>
        <Status avatar={monster} pj='Enemy' hp='HP: 32/40' shield='Shield: 0' />
        <Status avatar={player} pj='Player' hp='HP: 16/48' shield='Shield: 45' />
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

export default GameboardPage;
