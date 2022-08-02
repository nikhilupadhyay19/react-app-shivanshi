import React, { Fragment, useState, useEffect } from 'react';
import {
  ButtonGroup,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from 'reactstrap';
import { FakeStoreAPI_Url } from '../../helpers/config';
import { getJson } from '../../helpers/customFn';

import './FakeStoreAPI.scss';

const FakeStoreAPI = () => {
  const [id, setId] = useState(1);
  const [product, setProduct] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getJson(`${FakeStoreAPI_Url}/${id}`);
        setProduct(data);
        setLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }, [id]);

  const increaseIdCountHandler = () => {
    if (id < 20) {
      setId(id + 1);
      setLoaded(false);
    }
  };
  const decreaseIdCountHandler = () => {
    if (id > 1) {
      setId(id - 1);
      setLoaded(false);
    }
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={12}>
            <ButtonGroup>
              <Button onClick={decreaseIdCountHandler}>
                <i className="icofont icofont-rounded-double-left"></i>
              </Button>
              <Button>{id}</Button>
              <Button onClick={increaseIdCountHandler}>
                <i className="icofont icofont-rounded-double-right"></i>
              </Button>
            </ButtonGroup>
          </Col>
          <Col lg={12}>
            <div className="fixed-height">
              {error ? (
                <p>{error}</p>
              ) : !isLoaded ? (
                <p color="primary" className="text-center v-middle">
                  <Spinner color="dark">Loading...</Spinner>
                  <span>Please wait while loading...</span>
                </p>
              ) : (
                <p>{JSON.stringify(product)}</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FakeStoreAPI;
