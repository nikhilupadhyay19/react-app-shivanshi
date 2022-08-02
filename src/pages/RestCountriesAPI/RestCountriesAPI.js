import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Spinner } from 'reactstrap';
import { RestCountriesAPI_Url } from '../../helpers/config';
import { getJson } from '../../helpers/customFn';

const RestCountriesAPI = () => {
  const [pram, setPram] = useState('all');
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getJson(`${RestCountriesAPI_Url}/${pram}`);
        setApiData(data);
        setLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={12}>
            <Button color="dark">Get Your Location</Button>
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
                <p>{JSON.stringify(apiData)}</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RestCountriesAPI;
