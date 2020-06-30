import React from 'react';
import {Alert, Button, Row} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {alertAction} from '../../../model/actions';

const AlertComponent = () => {
  const monsterEffect = useSelector(state => state.getGameData.monsterEffect);
  const alertState = useSelector(state => state.getAlert.alert);
  const dispatch = useDispatch();

  const {effect} = monsterEffect;

  return (
    <Row className='w-100'>
      {effect !== '' && (
        <Alert show={alertState} variant='danger' className='w-100'>
          <Alert.Heading>
            Monster uses <p className='text-capitalize'>{effect}</p>
          </Alert.Heading>
          {effect === 'HORROR' ? <p>Your cards will be disabled until next turn.</p> : <p>Value: {monsterEffect.value}</p>}
          <div className='d-flex justify-content-end'>
            <Button onClick={() => dispatch(alertAction.alert(false))} variant='outline-dark'>
              Close
            </Button>
          </div>
        </Alert>
      )}
    </Row>
  );
};

export default AlertComponent;
