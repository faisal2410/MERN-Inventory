import React, {Fragment} from 'react';
import MasterLayout from "../../components/masterLayout/masterLayout";
import { Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Fragment>
      <MasterLayout>
          <Container fluid={true} className="content-body">
            <Row className="animated fadeIn">
            </Row>
        </Container>
      </MasterLayout>
    </Fragment>
  );
};
export default HomePage;
