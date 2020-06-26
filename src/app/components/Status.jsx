import React from 'react';
import {Col, Row, Card} from 'react-bootstrap';

const Status = ({avatar, pj, hp, shield}) => (
  <Row className='mb-4'>
    <Col xs={7}>
      <Card className='bg-dark'>
        <Row className='justify-content-md-center align-items-center'>
          <Col xs={5} className='justify-content-md-center align-items-center'>
            <Card.Img src={avatar} alt='demon' className='img-fluid p-3 bg-secondary' />
          </Col>
          <Card.Body>
            <Col xs={7} className='justify-content-md-center align-items-center'>
              <p className='text-white text-center font-weight-bold m-0'>{pj}</p>
              <p className='text-white text-center m-0'>{hp}</p>
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

export default Status;
