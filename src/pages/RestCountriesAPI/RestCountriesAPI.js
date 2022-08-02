import React, { Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const promisifyGeoLocationAPI = () => {
  return new Promise((resolve, reject) => {
    return Geolocation.getCurrentPosition(
      (success) => {
        return resolve(success);
      },
      (error) => {
        return reject(error);
      }
    );
  });
};

const RestCountriesAPI = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Button color="primary">Click Me</Button>
            <p>RestCountriesAPI...</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RestCountriesAPI;
