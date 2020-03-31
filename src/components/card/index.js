import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { find, uniqBy } from "lodash";

import { favoriteAction, getMovieDetail } from "store/actions";

import ModalComponent from "../modal";

const Card = ({
  favorites,
  favoriteAction,
  getMovieDetail,
  movieDetail,
  searchData = []
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async search => {
    await getMovieDetail({ search });
    setShow(true);
  };

  const handleClick = item => {
    favoriteAction(uniqBy([...favorites, item], "imdbID"));
  };

  const handleRemove = item => {
    favoriteAction(favorites.filter(fav => fav.imdbID !== item.imdbID));
  };

  const isFavorited = item => {
    return !find(favorites, { imdbID: item.imdbID });
  };

  return (
    <>
      <Row md={3}>
        {searchData.map((item, key) => (
          <Col style={{ marginBottom: "1rem" }} md={3} key={key}>
            <div className="card" style={{ minHeight: "500px" }}>
              <div className="card-image">
                <img
                  alt={item.Title}
                  src={item.Poster}
                  className="img-fluid"
                  style={{ width: "100%" }}
                  onClick={() => handleShow(item.imdbID)}
                />
              </div>
              <div className="card-body text-center">
                <div>{item.Title}</div>
                {isFavorited(item) ? (
                  <Button onClick={() => handleClick(item)} variant="success">
                    Add to favorite
                  </Button>
                ) : (
                  <Button onClick={() => handleRemove(item)} variant="danger">
                    Remove to favorite
                  </Button>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal__container"
      >
        <ModalComponent />
      </Modal>
    </>
  );
};

const mapStateToProps = ({ favorites, movieDetail }) => ({
  favorites,
  movieDetail
});

export default connect(mapStateToProps, { favoriteAction, getMovieDetail })(
  Card
);
