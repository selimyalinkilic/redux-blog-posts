import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LastPosts from "../../components/LastPosts/LastPosts";
import MostPopularPosts from "../../components/MostPopularPosts/MostPopularPosts";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <LastPosts />
          </Col>
          <Col className="ml-auto" md={3}>
            <MostPopularPosts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
