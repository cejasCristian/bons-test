import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import heal from '../../shared/images/heal.png';
import attack from '../../shared/images/attack.png';
import shield from '../../shared/images/shield.png';
import defaultCard from '../../shared/images/defaultCard.png';
import '../styles/playerCard.css';
import {useSelector, useDispatch} from 'react-redux';
import {cardActions, selectedCardActions} from '../../model/actions';
import axios from 'axios';

const PlayerCard = () => {
  const [cardId, setCardId] = useState();
  const dispatch = useDispatch();

  const playerStatus = useSelector(state => state.getPlayerData.playerData);

  // get data from API
  useEffect(() => {
    async function fetchData() {
      const res = await axios(`http://game.bons.me/api/players/${playerStatus.id}/cards`);
      const data = await res.data;
      dispatch(cardActions.setCardData(data));
    }
    fetchData();
  }, [dispatch, playerStatus.id]);

  const handleCardSelected = card => {
    setCardId(card);
    dispatch(selectedCardActions.setSelectedCard(cardId));
  };

  // card data
  const cardStatus = useSelector(state => state.getCardData.cardData);

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

  return (
    cardStatus &&
    cardStatus.map(card => {
      const {effect, value, id} = card;

      return (
        <Card key={id} className={`border-dark card-hover ${id === cardId ? 'active' : ''}`} id={id} onClick={() => handleCardSelected(id)}>
          <Card.Img variant='top' className='p-4 bg-light' src={currentImg(effect)} />
          <Card.Body className='bg-secondary'>
            <Card.Title className='text-center font-weight-bold text-white'>{effect}</Card.Title>
            <Card.Title className='text-center font-weight-bold text-white'>Value: {value}</Card.Title>
          </Card.Body>
        </Card>
      );
    })
  );
};

export default PlayerCard;
