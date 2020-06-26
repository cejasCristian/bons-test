import React from 'react';
import {Container, Col, Row, CardDeck} from 'react-bootstrap';
import Status from '../components/Status';
import PlayerCard from '../components/PlayerCard';
import TurnsInfo from '../components/TurnsInfo';

const GameboardPage = () => (
  <Container>
    <Row className='justify-content-md-center align-items-center vh-100'>
      <Col xs={9}>
        <Status />
        <Status />
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
