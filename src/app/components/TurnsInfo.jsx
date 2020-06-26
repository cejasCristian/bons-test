import React from 'react';
import {Card, Button} from 'react-bootstrap';

const TurnsInfo = () => (
  <Card className='bg-dark text-white border-0'>
    <Card.Header className='mb-4 bg-secondary text-center text-white font-weight-bold'>TURNS</Card.Header>
    <Card className='bg-dark text-white border-0'>
      <Card.Body className='bg-dark text-white'>
        <Card.Text className='text-center'>CURRENT</Card.Text>
        <Card.Title className='text-center font-weight-bold display-4'>12</Card.Title>
        <Card.Text className='text-center'>PAST</Card.Text>
        <Card.Title className='text-center font-weight-bold display-4'>11</Card.Title>
        <Card.Text className='text-center'>LEFT</Card.Text>
        <Card.Title className='text-center font-weight-bold display-4'>8</Card.Title>
      </Card.Body>
    </Card>
    <Button variant='info' type='submit' size='xs' className='mt-5 mb-4 mx-5'>
      END TURN
    </Button>
  </Card>
);

export default TurnsInfo;
