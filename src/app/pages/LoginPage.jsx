import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const LoginPage = () => (
  <Container>
    <Row className='justify-content-md-center align-items-center vh-100'>
      <Col xs={5} className='mx-auto'>
        <Form>
          <Form.Group>
            <Form.Label className='font-weight-bold'>Welcome to Bons Game</Form.Label>
            <p className='text-muted'>What’s your name?</p>
            <Form.Control className='bg-secondary text-white' type='text' placeholder='NAME' size='lg' />
          </Form.Group>
          <Button variant='info' type='submit' block size='lg'>
            LET’S PLAY
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default LoginPage;
