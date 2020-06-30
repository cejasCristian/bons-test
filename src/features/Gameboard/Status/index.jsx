import React, {useEffect} from 'react';
import {Col, Row, Card, ProgressBar} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {getPlayer, getMonster} from '../../../app/helpers/fetch';
import './status.css';

const Status = ({avatar, pj, hp, shield, life}) => {
  const dispatch = useDispatch();

  // get data for new game
  const newGameID = useSelector(state => state.getGameData.gameData.id);

  // get data for player and monster
  useEffect(() => {
    getPlayer(newGameID);
    getMonster(newGameID);
  }, [dispatch, newGameID]);

  // life bar color
  const lifeStatus = () => {
    if (life > 60) {
      return 'success';
    } else if (life > 30 && life <= 60) {
      return 'warning';
    }
    return 'danger';
  };

  return (
    <Row className='mb-4'>
      <Col xs={7}>
        <Card className='bg-dark'>
          <Row className='justify-content-md-center align-items-center'>
            <Col xs={5} className='justify-content-md-center align-items-center'>
              <Card.Img src={avatar} alt='avatarImg' className='img-fluid p-2 bg-secondary monsterImg' />
            </Col>
            <Card.Body>
              <Col xs={7} className='justify-content-md-center align-items-center m-auto'>
                <p className='text-white text-center font-weight-bold m-0'>{pj}</p>
                <p className='text-white text-center m-0'>{hp}</p>
                <ProgressBar animated variant={lifeStatus()} now={life} />
              </Col>
            </Card.Body>
          </Row>
        </Card>
      </Col>
      <Col xs={5}>
        <Card className='bg-secondary mx-auto h-100'>
          <Card.Text className='text-white text-center font-weight-bold my-auto'>{shield}</Card.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default Status;
