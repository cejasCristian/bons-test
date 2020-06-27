import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {gameActions} from '../../model/actions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [name, setName] = useState({
    name: ''
  });

  const handleChange = e => {
    setName(e.target.value);
  };

  // get a new game
  const handleSubmit = e => {
    e.preventDefault();

    axios.post(`http://game.bons.me/api/games?name`, {name}).then(res => {
      const data = res.data;
      dispatch(gameActions.setGameData(data));
      history.push('/gameboard');
    });
  };

  return (
    <Container>
      <Row className='justify-content-md-center align-items-center vh-100'>
        <Col xs={5} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className='font-weight-bold'>Welcome to Bons Game</Form.Label>
              <p className='text-muted'>What’s your name?</p>
              <Form.Control className='bg-dark text-white' type='text' placeholder='NAME...' size='lg' onChange={handleChange} />
            </Form.Group>
            <Button variant='info' type='submit' block size='lg'>
              LET’S PLAY
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
