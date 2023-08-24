import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import Results from './components/Results/Results';

const LateralSearch = styled(Col)`
min-height: 100vh;
background-color: tomato;
`

function App() {
  return (
    <Container fluid>
      <Row>
        <LateralSearch>
        </LateralSearch>
        <Col xs={9} className='d-flex flex-wrap align-items-start ms-3 mt-4'>
          <Results/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
