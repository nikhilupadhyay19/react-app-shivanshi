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
import { JsonPlaceholderAPI_Url } from '../../helpers/config';
import { getJson } from '../../helpers/customFn';

const JsonPlaceholderAPI = () => {
  const [id, setId] = useState(1);
  const [pram, setPram] = useState('posts');
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getJson(`${JsonPlaceholderAPI_Url}/${pram}`);
        setApiData(data);
        setLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }, [pram]);

  const chnagePramHandler = (el) => {
    setPram(el.target.value);
    setLoaded(false);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={12}>
            <ButtonGroup>
              <Button onClick={chnagePramHandler} value="posts">
                Posts <i className="icofont icofont-rounded-double-right"></i>
              </Button>
              <Button onClick={chnagePramHandler} value="comments">
                Comments{' '}
                <i className="icofont icofont-rounded-double-right"></i>
              </Button>
              <Button onClick={chnagePramHandler} value="albums">
                Albums <i className="icofont icofont-rounded-double-right"></i>
              </Button>
              <Button onClick={chnagePramHandler} value="photos">
                Photos <i className="icofont icofont-rounded-double-right"></i>
              </Button>
              <Button onClick={chnagePramHandler} value="todos">
                Todos <i className="icofont icofont-rounded-double-right"></i>
              </Button>
              <Button onClick={chnagePramHandler} value="users">
                Users <i className="icofont icofont-rounded-double-right"></i>
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
                <p>{JSON.stringify(apiData)}</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default JsonPlaceholderAPI;
