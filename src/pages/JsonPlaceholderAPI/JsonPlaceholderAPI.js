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

  <Fragment>
    <Container>
      <Row>
        <Col lg={12}>
          <ButtonGroup>
            <Button>
              Posts <i className="icofont icofont-rounded-double-left"></i>
            </Button>
            <Button>
              Comments <i className="icofont icofont-rounded-double-right"></i>
            </Button>
            <Button>
              Albums <i className="icofont icofont-rounded-double-right"></i>
            </Button>
            <Button>
              Photos <i className="icofont icofont-rounded-double-right"></i>
            </Button>
            <Button>
              Todos <i className="icofont icofont-rounded-double-right"></i>
            </Button>
            <Button>
              Users <i className="icofont icofont-rounded-double-right"></i>
            </Button>
          </ButtonGroup>
        </Col>
        <Col lg={12}>
          {error ? (
            <Alert color="danger">{error}</Alert>
          ) : !isLoaded ? (
            <Alert color="primary" className="text-center v-middle">
              <Spinner color="dark">Loading...</Spinner>
              <span>Please wait while loading...</span>
            </Alert>
          ) : (
            <p>{JSON.stringify(apiData)}</p>
          )}
        </Col>
      </Row>
    </Container>
  </Fragment>;
};
export default JsonPlaceholderAPI;
