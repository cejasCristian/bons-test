import React from 'react';
import {Card} from 'react-bootstrap';
import monster from '../../shared/images/monster.png';

const PlayerCard = () => (
  <Card>
    <Card.Img variant='top' className='p-3' src={monster} />
    <Card.Body>
      <Card.Title className='text-center'>Card title</Card.Title>
    </Card.Body>
  </Card>
);

export default PlayerCard;
