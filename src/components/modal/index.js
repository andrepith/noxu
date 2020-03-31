import React from "react";
import { connect } from "react-redux";
import { Modal, Row, Col } from "react-bootstrap";

const ModalComponent = ({ movieDetail }) => {
  const {
    Title,
    Poster,
    Rated,
    Runtime,
    Genre,
    imdbRating,
    Plot,
    Director,
    imdbVotes
  } = movieDetail.data;
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="modal__wrapper">
          <Col sm={4} className="poster text-center">
            <img src={Poster} alt={Title} style={{ maxHeight: "320px" }} />
          </Col>
          <Col sm={8} className="body">
            <div>
              {Rated} | {Runtime} | {Genre}
            </div>
            <div>{imdbRating}/10</div>
            <p>{Plot}</p>
            <div>Director: {Director}</div>
            <div>Votes: {imdbVotes}</div>
          </Col>
        </Row>
      </Modal.Body>
    </>
  );
};

const mapStateToProps = ({ movieDetail }) => ({ movieDetail });

export default connect(mapStateToProps, null)(ModalComponent);
