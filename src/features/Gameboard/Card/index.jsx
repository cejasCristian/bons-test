import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import heal from '../../../shared/images/heal.png';
import attack from '../../../shared/images/attack.png';
import shield from '../../../shared/images/shield.png';
import defaultCard from '../../../shared/images/defaultCard.png';
import {selectedCardAction} from '../../../model/actions';
import {useSelector, useDispatch} from 'react-redux';
import {getCards} from '../../../app/helpers/fetch';
import './playerCard.css';

const PlayerCard = () => {
  const [cardID, setCardID] = useState();
  const dispatch = useDispatch();

  const playerStatus = useSelector(state => state.getPlayerData.playerData);

  // get cards from API
  useEffect(() => {
    getCards(playerStatus.id);
  }, [dispatch, playerStatus.id]);

  const handleCardSelected = card => {
    setCardID(card);
    dispatch(selectedCardAction.setSelectedCard(card));
  };

  // card data
  const cardStatus = useSelector(state => state.getCardData.cardData);

  // monster effect
  const monsterEffect = useSelector(state => state.getGameData.monsterEffect.effect);

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

  const horror = 'HORROR';

  return (
    cardStatus &&
    cardStatus.map(card => {
      const {effect, value, id} = card;

      return (
        <Card key={id} className={`border-dark card-hover ${monsterEffect === horror && 'disabled'} ${id === cardID && 'active'}`} id={id} onClick={() => handleCardSelected(id)}>
          <Card.Img variant='top' className='p-4 bg-light' src={currentImg(effect)} />
          <Card.Body className={`${id === cardID ? 'bg-info' : 'bg-secondary'}`}>
            <Card.Title className='text-center font-weight-bold text-white'>{effect}</Card.Title>
            <Card.Title className='text-center font-weight-bold text-white'>Value: {value}</Card.Title>
          </Card.Body>
        </Card>
      );
    })
  );
};

export default PlayerCard;
