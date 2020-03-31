import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";

const Card = ({ movieList }) => {
  const handleClick = item => {};
  return (
    <Row md={3}>
      {movieList.data.Search.map((item, key) => (
        <Col style={{ marginBottom: "1rem" }} md={3} key={key}>
          <div className="card" style={{ minHeight: "500px" }}>
            <div className="card-image">
              <img
                alt={item.Title}
                src={item.Poster}
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
            <div className="card-body text-center">
              <div>{item.Title}</div>
              <Button onClick={() => handleClick(item)}>Add to favorite</Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

const mapStateToProps = ({ movieList }) => ({ movieList });

export default connect(mapStateToProps, null)(Card);
