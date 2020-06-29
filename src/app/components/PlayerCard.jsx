import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import heal from '../../shared/images/heal.png';
import attack from '../../shared/images/attack.png';
import shield from '../../shared/images/shield.png';
import defaultCard from '../../shared/images/defaultCard.png';
import '../styles/playerCard.css';

const PlayerCard = ({cardName, value}) => {
  const [active, setActive] = useState();

  // Set card image
  const currentImg = card => {
    let image;
    switch (card) {
      case 'HEAL':
        image = heal;
        break;
      case 'SHIELD':
        image = shield;
        break;
      case 'DAMAGE':
        image = attack;
        break;
      default:
        image = defaultCard;
        break;
    }
    return image;
  };

  const handleClick = () => {
    if (active) {
      setActive('');
    }
    setActive(!active);
  };

  return (
    <Card className={`border-dark card-hover ${active ? 'active' : ''}`} onClick={handleClick}>
      <Card.Img variant='top' className='p-4 bg-light' src={currentImg(cardName)} />
      <Card.Body className='bg-secondary'>
        <Card.Title className='text-center font-weight-bold text-white'>{cardName}</Card.Title>
        <Card.Title className='text-center font-weight-bold text-white'>Value:{value}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
