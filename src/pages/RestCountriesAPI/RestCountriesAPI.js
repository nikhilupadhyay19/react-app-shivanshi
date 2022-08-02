import React, { Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { RestCountriesAPI_Url } from '../../helpers/config';
import { getJson } from '../../helpers/customFn';

const RestCountriesAPI = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Button color="dark">Get Your Location</Button>
            <p>RestCountriesAPI...</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RestCountriesAPI;
